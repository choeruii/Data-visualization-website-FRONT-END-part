import React from "react";
import Image from "next/image";
import { withStyles } from "@material-ui/core/styles";
import styles from "../public/styles/login.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
export default function IndexPage() {
  const style = {
    bgd: {
      margin: "0",
      padding: "0",
      color: "rgba(0,0,0,.25)",
      backgroundImage: `url("/images/big-image2.jpg")`,
      width: "100%",
      paddingTop: "139px",
      paddingBottom: "193px",
    }
  };

  const ColorButton = withStyles((theme) => ({
    root: {
      fontSize: 18
    }
  }))(Button);

  return (
    <div style={style.bgd}>
      <div className={styles.login_card}>
        <div className={styles.login_logo}>
          <Image src="/images/login-logo.png" height={150} width={150}></Image>
        </div>
        <div className={styles.login_choice}>
          <div className={styles.choice_warp}>
            <span>患者</span>
            <div className={styles.choice_circle}></div>
          </div>
          <div className={styles.choice_warp1}>
            <span>医生</span>
            <div className={styles.choice_circle}></div>
          </div>
        </div>
        <form noValidate autoComplete="off" className={styles.form}>
          <div className={styles.text}>
            <Image src="/images/username.png" height={50} width={50}></Image>
            <div>
              <TextField
                id="outlined-basic"
                label="账号"
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className={styles.text1}>
            <Image src="/images/password.png" height={50} width={50}></Image>
            <div width="200px">
              <TextField
                id="outlined-basic"
                label="密码"
                variant="outlined"
                type="password"
                fullWidth
              />
            </div>
          </div>
          <div className={styles.submit_box}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.submit_style}
            >
              <h2>登录</h2>
            </Button>
          </div>
        </form>
        <div className={styles.foot}>
          <div className={styles.foot_item}>
            <ColorButton href="\register">注册</ColorButton>
          </div>
          <div className={styles.foot_item}>
            <ColorButton href="#">忘记密码</ColorButton>
          </div>
        </div>
      </div>
    </div>
  );
}

