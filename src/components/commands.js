import CmdItem from "./commandsItem";
import { useTranslation } from "react-i18next";

export default function Commands() {
    const {t} = useTranslation()
    const commandsData = t("commandsPage.commands", {returnObjects: true})
    return commandsData.map((item) => {
        return <CmdItem 
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
        ></CmdItem>
    })
}
