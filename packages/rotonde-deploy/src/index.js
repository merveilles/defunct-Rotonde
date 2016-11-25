export default async function deploy(target) {
  try {
    require(`rotonde-deploy-${target}`)();
  } catch (err) {
    throw new Error(`Unsupported deployment target: '${target}'`);
  }
}
