import { MAIN_ROUTES } from "@/routes/rutes";
import { ToolsCard } from "./components/ToolsCard/ToolsCard";
import { Typography, Container, Box } from "@mui/material";
import {useTranslations} from "next-intl";
import LangSwitch from "@/app/[locale]/components/LangSwitch/LangSwitch";

export default function Home() {
    const mode = 'dark'

    const t = useTranslations()

    return (
        <Container maxWidth="xl">
            <LangSwitch/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 8,
                    px: 2,
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    align="center"
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        background: mode === 'dark'
                            ? 'linear-gradient(45deg, #90caf9 30%, #64b5f6 90%)'
                            : 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
                    }}
                >
                    {t('name')}  All-in-One Online Tools
                </Typography>

                <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                    color="text.secondary"
                    sx={{
                        mb: 6,
                        maxWidth: 800,
                        lineHeight: 1.8,
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                    }}
                >
                    Discover a wide range of free online tools for developers and tech
                    enthusiasts. From code editors and JSON processors to converters and
                    formatters, our platform offers everything you need to streamline your
                    workflow and boost productivity.
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)',
                        },
                        gap: 3,
                        width: '100%',
                        mb: 6,
                    }}
                >
                    {MAIN_ROUTES.map((route) => (
                        <ToolsCard {...route} key={route.path} />
                    ))}
                </Box>

                <Typography
                    variant="h6"
                    align="center"
                    sx={{
                        fontWeight: 600,
                        p: 2,
                        borderRadius: 2,
                        background: mode === 'dark'
                            ? 'rgba(144, 202, 249, 0.08)'
                            : 'rgba(33, 150, 243, 0.08)',
                        color: mode === 'dark' ? '#90caf9' : '#1976d2',
                    }}
                >
                    MORE TOOLS COMING SOON...
                </Typography>
            </Box>
        </Container>
    );
}
