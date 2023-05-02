import React from "react";
import { Card } from "../../components/ui/Card";
import { Title } from "../../components/ui/Title";
import { ReactIcon } from "../../components/ui/Icons/ReactIcon";
import { NodeJsIcon } from "../../components/ui/Icons/NodeJsIcon";
import { TypeScriptIcon } from "../../components/ui/Icons/TypeSctiptIcon";
import { MongoDBIcon } from "../../components/ui/Icons/MongoDBIcon";
import { Medium } from "../../types";

type AboutWebsiteProps = {};

export const AboutWebsite: React.FC<AboutWebsiteProps> = () => {
  const technologies = [
    {
      label: "React",
      icon: <ReactIcon />,
    },
    {
      label: "NodeJS",
      icon: <NodeJsIcon />,
    },
    {
      label: "TypeScript",
      icon: <TypeScriptIcon />,
    },
    {
      label: "MongoDB",
      icon: <MongoDBIcon />,
    },
  ];
  return (
    <>
      <Card classNames="w-160 h-120">
        <Title text="About The Website..." />
        <p>This website was built using the following technologies:</p>
        <div className="flex flex-col gap-10">
          {technologies.map((tech) => {
            return (
              <div className="flex items-center gap-2">
                {tech.icon}
                <Title text={tech.label} size={Medium} />
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
};
