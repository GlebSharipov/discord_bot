module.exports = async (bot, message, args, argsF) => {
    const { chanel } = message;
    const content = argsF.join(" ");
    await chanel.send(content);
};
