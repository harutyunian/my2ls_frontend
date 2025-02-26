'use client'
import React, { useState, useEffect } from 'react';
import ReactCountryFlag from "react-country-flag";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { COUNTRIES } from "@/constant/countries";
import styles from "./LangSwitch.module.css";
import { ILanguage } from "@/types/lang";
import {
    DialogContent,
    InputBase,
    Paper,
    Typography,
    Box,
    Grid
} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';

export default function LangSwitch() {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(COUNTRIES);
    const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>({
        lang: 'English',
        originalLanguageName: 'English',
        countryOriginalName: "United States",
        countryCode: "us",
        countryLanguage: "en"
    });

    // Filter countries based on search query
    useEffect(() => {
        if (!searchQuery) {
            setFilteredCountries(COUNTRIES);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = COUNTRIES.filter(country =>
            country.lang.toLowerCase().includes(query) ||
            country.originalLanguageName.toLowerCase().includes(query) ||
            country.countryOriginalName.toLowerCase().includes(query)
        );

        setFilteredCountries(filtered);
    }, [searchQuery]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSearchQuery(''); // Clear search on close
    };

    const handleSelectLanguage = (lang: ILanguage) => {
        setSelectedLanguage(lang);
        handleClose();
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className={styles.container}>
            <Button
                onClick={handleOpen}
                className={styles.languageButton}
                variant="outlined"
                startIcon={
                    <ReactCountryFlag
                        countryCode={selectedLanguage.countryCode}
                        svg
                    />
                }
            >
                <span className={styles.buttonText}>
                    {selectedLanguage.lang} - {selectedLanguage.originalLanguageName}
                </span>
            </Button>

            <Dialog
                className={styles.dialog}
                open={open}
                onClose={handleClose}
                maxWidth="md"
                PaperProps={{
                    className: styles.dialogPaper
                }}
            >
                <Box className={styles.dialogHeader}>
                    <LanguageIcon className={styles.headerIcon} />
                    <Typography variant="h5">Select Your Language</Typography>
                </Box>

                <Box className={styles.searchContainer}>
                    <Paper className={styles.searchPaper}>
                        <SearchIcon className={styles.searchIcon} />
                        <InputBase
                            fullWidth
                            placeholder="Search languages..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className={styles.searchInput}
                        />
                    </Paper>
                </Box>

                <DialogContent className={styles.dialogContent}>
                    {filteredCountries.length === 0 ? (
                        <Box className={styles.noResults}>
                            <Typography variant="body1" color="textSecondary">
                                No languages found matching {searchQuery}
                            </Typography>
                        </Box>
                    ) : (
                        <Grid container spacing={2} className={styles.languageGrid}>
                            {filteredCountries.map((lang) => (
                                <Grid item xs={12} sm={4} key={lang.countryCode}>
                                    <Paper
                                        elevation={selectedLanguage.countryCode === lang.countryCode ? 4 : 0}
                                        className={`${styles.languageOption} ${selectedLanguage.countryCode === lang.countryCode ? styles.selectedOption : ''}`}
                                        onClick={() => handleSelectLanguage(lang)}
                                    >
                                        <Box className={styles.flagContainer}>
                                            <ReactCountryFlag
                                                countryCode={lang.countryCode}
                                                svg
                                                className={styles.flagIcon}
                                            />
                                        </Box>
                                        <Box className={styles.languageText}>
                                            <Typography variant="subtitle1" className={styles.langName}>{lang.lang}</Typography>
                                            <Typography variant="body2" color="textSecondary" className={styles.nativeName}>{lang.originalLanguageName}</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}