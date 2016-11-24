export default async function deploy(service) {
  const deploy = require(`rotonde-deploy-${service}`);
  console.log(deploy);
}
