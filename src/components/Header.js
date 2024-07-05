import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import { headShake } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Switch from "react-switch";

const Header = () => {
  const [checked, setChecked] = useState(false);

  var titles = ["Compiling👀👀👀"];
  const HeaderTitleAnimation = React.memo(
    () => {
      return <Typical className="title-styles" steps={titles} loop={300} />;
    },
    (props, prevProps) => true
  );

  function IconAnimation() {
    useEffect(() => {
      const timer = setInterval(() => {
        if (currentClass < classIconNames.length - 1) {
          setCurrentClass((prevtime) => prevtime + 1);
        } else {
          setCurrentClass(0);
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div>
        <span
          className="iconify header-icon"
          data-icon={classIconNames[currentClass]}
          data-inline="false"
        ></span>
      </div>
    );
  }

  const [currentClass, setCurrentClass] = useState(2);
  const classIconNames = [
    "bx:bx-user-pin",
    "bx:bx-code-alt",
    "bx:bx-code-curly",
    "ant-design:code-outlined",
    "eos-icons:neural-network",
    "icon-park-outline:laptop-computer",
    "carbon:load-balancer-network",
  ];

  const handleThemeChange = () => {
    setChecked(!checked);
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  const styles = {
    bounce: {
      animation: "x 1s infinite",
      animationName: Radium.keyframes(headShake, "bounce"),
      display: "inline-block",
      height: "100",
    },
  };

  return (
    <div>
      <header
        id="home"
        style={{ height: window.innerHeight, display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <StyleRoot>
                <div style={styles.bounce}>
                  <IconAnimation />
                </div>
              </StyleRoot>
              <br />
              <h1>
                <Typical steps={["Rohit"]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleAnimation />
              </div>
              <Switch
                checked={checked}
                onChange={handleThemeChange}
                offColor="#80afba"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="bx:bxs-moon"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="emojione-v1:sun"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
