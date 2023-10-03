import React from "react";
import Image from "next/image";

import { MAIN_TITLE, SUB_TITLE } from "./constants";
import Button from "../Button/Button";

export default function Hero() {
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">{MAIN_TITLE}</h1>
                <p className="hero__subtitle">{SUB_TITLE}</p>
                <Button />
            </div>
        </div>
    );
}
