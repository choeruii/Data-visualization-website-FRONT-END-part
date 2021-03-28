import React from 'react';
import Button from '@material-ui/core/button';
import { withStyles,makeStyles } from "@material-ui/core/styles";
import styles from "../public/styles/register.module.css";
import TextField from "@material-ui/core/TextField";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    display: "inline-block",
    margin: theme.spacing(2),
    border: "none",
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius
    }
  }
}))(ToggleButtonGroup);

const StyledToggleButton = withStyles((theme) => ({
  root: {
    border: "none",
    boxShadow: "inset 0px 9px 9px -9px gray,inset 0px -9px 9px -9px gray",
    width: 116,
    height: 50,
    fontSize: 20,
    marginLeft: 0,
    "&.Mui-selected": {
      backgroundColor: "#32BDFE",
      "&:hover": {
        backgroundColor: "#32AEFE"
      }
    }
  }
}))(ToggleButton);


const useStyles = makeStyles((theme) => ({
  birthday_container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  birthday_textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function registerDoctorPage(){
  const classes = useStyles();
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
  const [gender, setGender] = React.useState("male");

  const handleGender = (event, newGender) => {
    setGender(newGender);
  };

  const [marry, setMarry] = React.useState("married");

  const handleMarry = (event, newMarry) => {
    setMarry(newMarry);
  };

  const [level, setLevel] = React.useState("high");

  const handleLevel = (event, newLevel) => {
    setLevel(newLevel);
  };

  return(
    <div style={style.bgd}>
      <div className={styles.register_card}>
        <div className={styles.title}>患者注册</div>
        <TextField
          id="outlined-basic"
          label="真实姓名"
          variant="outlined"
          fullWidth
        />
        <div className={styles.choose_gender}>
          <span className={styles.item_title}>性别</span>
          <StyledToggleButtonGroup
            size="small"
            value={gender}
            exclusive
            onChange={handleGender}
            aria-label="gender"
          >
            <StyledToggleButton value="male" aria-label="male">
              男
            </StyledToggleButton>
            <StyledToggleButton
              value="female"
              aria-label="female"
              style={{ marginRight: 0 }}
            >
              女
            </StyledToggleButton>
          </StyledToggleButtonGroup>
        </div>

        <div className={styles.choose_marry}>
          <span className={styles.item_title}>婚姻</span>
          <StyledToggleButtonGroup
            size="small"
            value={marry}
            exclusive
            onChange={handleMarry}
            aria-label="marry"
          >
            <StyledToggleButton value="married" aria-label="married">
              已婚
            </StyledToggleButton>
            <StyledToggleButton
              value="unmarried"
              aria-label="unmarried"
              style={{ marginRight: 0 }}
            >
              未婚
            </StyledToggleButton>
          </StyledToggleButtonGroup>
        </div>

        <div className={styles.choose_level}>
          <span className={styles.item_title}>学历</span>
          <div>
          <StyledToggleButtonGroup
            size="small"
            value={level}
            exclusive
            onChange={handleLevel}
            aria-label="level"
          >
            <StyledToggleButton value="junior" aria-label="junior">初中</StyledToggleButton>
            <StyledToggleButton value="senior" aria-label="senior" style={{ marginRight: 0 }}>高中</StyledToggleButton>


          </StyledToggleButtonGroup>
        </div>        
      <div>
        <StyledToggleButtonGroup
            size="small"
            value={level}
            exclusive
            onChange={handleLevel}
            aria-label="level"
          >
            <StyledToggleButton value="specialist" ria-label="specialist" style={{ marginBottom:1 }}>专科</StyledToggleButton>
            <StyledToggleButton value="others" aria-label="others"style={{ marginRight: 0,marginBottom:1}}>本科以上</StyledToggleButton>

          </StyledToggleButtonGroup>
        </div>
        </div>


{/** className={classes.birthday_container} */}
        <div>
          <span className={styles.item_title}>出生年月</span>
          <form className={styles.birthday_container}Validate>
            <TextField
              id="date"
              label=""
              type="date"
              defaultValue="2017-05-24"
               className={classes.birthday_textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>
        
        <TextField
          id="outlined-basic"
          label="请输入手机号"
          variant="outlined"
          type = "number"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          label="请输入密码"
          variant="outlined"
          type="password"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          label="请再次确认密码"
          variant="outlined"
          type="password"
          fullWidth
        />

        <div className={styles.submit_box}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.submit_style}
            >
              <h2>患者注册完成</h2>
            </Button>
          </div>


      </div>

    </div>
  );
}