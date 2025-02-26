'use client'
import React from 'react';
import ReactCountryFlag from "react-country-flag"
import {LOCALES} from "@/i18n/routing";
import {COUNTRIES} from "@/constant/countries";


export default function LangSwitch() {


    return <div>
        {COUNTRIES.map((code)=>{
            const {countryCode} = code;
            return <ReactCountryFlag countryCode={countryCode} key={countryCode}/>;
        })}
    </div>
}