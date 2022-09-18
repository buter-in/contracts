module.exports = async ({getNamedAccoutns, deployments}) => {
    const { deploy, get } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log('deployer', deployer)
    await deploy('SBToken_V4', {
        from: deployer,
        waitConfirmations: 1,
        args: ['SBToken Buterin', 'SBTB', '1'],
        log: true,
    });
};
module.exports.tags = ['SBToken'];