export default async function deploy(target) {
  if (!isDeploymentTargetSupported(target)) {
    throw new Error(`Unsupported deployment target: '${target}'`);
  }
  require(`rotonde-deploy-${target}`)();
}

/**
 * Returns whether the specified deployment target is supported.
 *
 * @param target The target to check.
 */
export function isDeploymentTargetSupported(target) {
  try {
    require(`rotonde-deploy-${target}`);
    return true;
  } catch (err) {
    return false;
  }
}
