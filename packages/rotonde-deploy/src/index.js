export default async function deploy(service) {
  require(`rotonde-deploy-${service}`)();
}
