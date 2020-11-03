
class AnswerBuilder {
    async getAnswer(luisResponse) {
        switch (luisResponse.luisResult.prediction.topIntent) {
        case 'tf.int.common.basic_greetings':
            return 'Hi!!, what can I do for you today?';

        case 'tf.int.identity.name':
            return 'This is a VerizonBot test';

        case 'tf.int.identity.age':
            return "My age is calculated in clock cycles, I've got quite a few!";

        case 'tf.int.common.pref_travel':
            return 'Yes, I love travelling through the net';

        case 'tf.int.common.basic_byes':
            return 'It was nice talking to you, see you soon';

        case 'None':
            return "Sorry, don't know how what to say, could you ask me again with another words";
        default:
            return 'Sorry there was a problem understanding your request';
        }
    }
}

module.exports.AnswerBuilder = AnswerBuilder;
