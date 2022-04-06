import {createCommand} from "commander";
import {loadBuildConfigAsKeyValue} from "./loader";

const program = createCommand('to-bash');

export default program
    .argument("build_config_name")
    .argument("platform")
    .description('outputs the specified build config as key-value pairs which can be executed by bash')
    .action((buildConfigName, platform) => {
        const buildConfig = loadBuildConfigAsKeyValue(buildConfigName, platform, false, true)
        console.log(buildConfig)
    })
