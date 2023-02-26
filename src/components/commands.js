import CmdItem from "./commandsItem";
import commandsData from "./data/commandsData";

export default function Commands() {
    return commandsData.map((item) => {
        return <CmdItem 
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
        ></CmdItem>
    })
}
