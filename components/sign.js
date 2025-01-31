import { TextField, Fade } from "@mui/material"
import styles from "./sign.module.css"
import { useState } from "react";

export default function Sign() {
    const [idValue, setIdValue] = useState("");
    const [showPwField, setShowPwField] = useState(false);
    const handleIdChange = (event) => {
        const value = event.target.value;
        setIdValue(value);

        if (value.length >= 5) {
            setShowPwField(true);
        } else {
            setShowPwField(false);
        }
    }
    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.head}>회원가입</h2>
                <div className={styles.form}>
                    <TextField
                        required
                        id="id-required"
                        label="ID"
                        placeholder="ID"
                        helperText="6-12자 이내 영문, 숫자 사용가능"
                        value={idValue}
                        onChange={handleIdChange}
                        fullWidth
                    ></TextField>
                    {setShowPwField && (
                        <Fade in={showPwField} timeout={500}>
                            <TextField
                                id="password-required"
                                label="password"
                                type="password"
                                placeholder="Password"
                                helperText="8-10자 이내 영문, 숫자, 특수문자 사용가능"
                                fullWidth
                            ></TextField>
                        </Fade>
                    )}
                </div>
            </div>
        </>
    )
}