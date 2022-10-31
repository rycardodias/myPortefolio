import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: {},
      logoImages: [
        {
          "name": "HTML",
          "iconifyClass": "logos-html-5"
        },
        {
          "name": "CSS",
          "iconifyClass": "logos-css-3"
        },
        {
          "name": "JavaScript",
          "iconifyClass": "logos-javascript"
        },
        {
          "name": "C#",
          "iconifyClass": "logos-c-sharp"
        },
        {
          "name": "C",
          "iconifyClass": "logos-c"
        },
        {
          "name": "Objective-C",
          "iconifyClass": "logos-apple"
        },
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "PHP",
          "iconifyClass": "logos-php"
        },
        {
          "name": "Java",
          "iconifyClass": "logos-java"
        },
        {
          "name": "Shell",
          "iconifyClass": "arcticons-shell"
        },
        {
          "name": "PLpgSQL",
          "iconifyClass": "logos-postgresql"
        },
        {
          "name": "Vue",
          "iconifyClass": "logos-vue"
        },
      ]
    };
  }



  componentDidMount() {
    fetch(this.props.logos)
      .then(response => response.json())
      .then(data => {
        this.setState({ languages: data });
      })
  }

  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {
              Object.entries(this.state.languages).map(item => {
                let icon = this.state.logoImages.find(value => value.name === item[0]) || { name: "", iconifyClass: "" }

                return (
                  <OverlayTrigger
                    key={item[0]}
                    placement={"top"}
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        <strong>{item[0]}</strong>
                      </Tooltip>
                    }
                  >
                    <li className="software-skill-inline-languages" name={icon.name}>
                      <span className="iconify" data-inline="false"
                        data-icon={icon.iconifyClass}
                      />
                    </li>
                  </OverlayTrigger>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
