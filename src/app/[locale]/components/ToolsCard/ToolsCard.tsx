import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Link} from '@/i18n/routing'
import Box from "@mui/material/Box";

// Import the same icons we used in the header
import DataObjectIcon from '@mui/icons-material/DataObject';
import CssIcon from '@mui/icons-material/Css';
import CodeIcon from '@mui/icons-material/Code';
import TransformIcon from '@mui/icons-material/Transform';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CompressIcon from '@mui/icons-material/Compress';
import RegularExpressionIcon from '@mui/icons-material/Terminal';
import SecurityIcon from '@mui/icons-material/Security';
import ImageIcon from '@mui/icons-material/Image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WebIcon from '@mui/icons-material/Web';
import AutomationIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TerminalIcon from '@mui/icons-material/Terminal';
import TextFieldsIcon from '@mui/icons-material/TextFields';

interface IToolsCardProps {
    name: string;
    path: string;
}

const getRouteIcon = (routeName: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
        'Json': <DataObjectIcon />,
        'CSS Formatter': <CssIcon />,
        'CSS formatter': <CssIcon />,
        'Code Formatter and Beautifier': <CodeIcon />,
        'Code Converters': <TransformIcon />,
        'Data and File Converters': <FolderCopyIcon />,
        'Code Minifiers': <CompressIcon />,
        'Regular Expression (Regex) Tools': <RegularExpressionIcon />,
        'Encryption and Decryption Tools': <SecurityIcon />,
        'Image Editing and Optimization': <ImageIcon />,
        'Video and Audio Tools': <PlayCircleIcon />,
        'Front-End Development Tools': <WebIcon />,
        'Web Scraping and Automation Tools': <AutomationIcon />,
        'Performance Tools': <SpeedIcon />,
        'SEO and Analytics Tools': <AnalyticsIcon />,
        'Command-Line Tools and Development Helpers': <TerminalIcon />,
        'Text and Document Tools': <TextFieldsIcon />
    };

    return iconMap[routeName] || <CodeIcon />;
};
// es pahy heto kpoxenq
let mode = 'light';

export function ToolsCard({ name, path }: IToolsCardProps) {
    mode = 'light'
    return (
        <Link href={path} style={{ textDecoration: 'none' }}>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    background: mode === 'dark'
                        ? 'linear-gradient(145deg, #1e1e1e 0%, #2d2d2d 100%)'
                        : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: mode === 'dark'
                            ? '0 8px 24px rgba(0,0,0,0.5)'
                            : '0 8px 24px rgba(0,0,0,0.1)',
                        background: mode === 'dark'
                            ? 'linear-gradient(145deg, #2d2d2d 0%, #1e1e1e 100%)'
                            : 'linear-gradient(145deg, #f5f5f5 0%, #ffffff 100%)',
                    },
                }}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        p: 3,
                        flex: 1,
                    }}
                >
                    <Box
                        sx={{
                            mb: 2,
                            color: mode === 'dark' ? '#90caf9' : '#1976d2',
                            transform: 'scale(1.5)',
                        }}
                    >
                        {getRouteIcon(name)}
                    </Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 500,
                            color: mode === 'dark' ? '#fff' : '#333',
                            fontSize: '1rem',
                            lineHeight: 1.4,
                        }}
                    >
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}