import { NextRequest, NextResponse } from 'next/server';
import sass from 'sass';

function isValidScss(scssCode: string): boolean {
    // Basic SCSS validation checks
    const scssKeywords = [
        '$',
        '@mixin',
        '@include',
        '@extend',
        '@media',
        '%',
        '&:',
        '&.'
    ];

    // Check for basic SCSS-specific syntax
    const hasScssSpecificSyntax = scssKeywords.some(keyword =>
        scssCode.includes(keyword)
    );

    // Check for nested selectors, variables, or basic SCSS constructs
    const hasSassSpecificStructures = /(\$\w+\s*:|&\s*{|\w+\s*{\s*&)/.test(scssCode);

    return hasScssSpecificSyntax || hasSassSpecificStructures;
}

export async function POST(request: NextRequest) {
    try {
        const { scssCode } = await request.json();

        if (!scssCode) {
            return NextResponse.json({
                error: 'No SCSS code provided'
            }, { status: 400 });
        }

        // Validate SCSS
        if (!isValidScss(scssCode)) {
            return NextResponse.json({
                error: 'Invalid SCSS code. Please provide valid SCSS syntax.'
            }, { status: 400 });
        }

        const result = sass.compileString(scssCode, {
            style: 'expanded',
            syntax: 'scss'
        });

        return NextResponse.json({
            css: result.css
        });
    } catch (error) {
        console.error('SCSS Conversion Error:', error);
        return NextResponse.json({
            error: error instanceof Error ?
                'Invalid SCSS: ' + error.message :
                'Conversion failed'
        }, { status: 500 });
    }
}