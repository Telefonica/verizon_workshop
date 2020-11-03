const { ActivityHandler, ActionTypes, ActivityTypes, CardFactory } = require('botbuilder');

class AnswerBuilder {
    async getAnswer(luisResponse) {
        switch (luisResponse.luisResult.prediction.topIntent) {
        case 'tf.int.common.basic_greetings':
            return this.greetings();

        case 'tf.int.identity.name':
            return 'This is a VerizonBot test';

        case 'tf.int.identity.age':
<<<<<<< HEAD
            return "My age is calculated in clock cycles, I've got quite a few";
=======
            return "My age is calculated in clock cycles, I've got quite a few!";
>>>>>>> speak

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

    greetings() {
        const reply = { type: ActivityTypes.Message };
        reply.text = 'This is an inline attachment.';
        reply.speak = ''
        const buttons = [
            { type: ActionTypes.ImBack, title: 'Name', value: 'What is your name?' },
            { type: ActionTypes.ImBack, title: 'Age', value: 'How old are your?' },
            { type: ActionTypes.ImBack, title: 'Hobbies', value: 'Do you like travelling?' }
        ];

        const card = CardFactory.heroCard(
            'Greetings',
            ['https://m-cdn.phonearena.com/images/hub/32-two_500/Verizon-phones-plans-and-news.jpg'],
            buttons,
            { text: 'Hero Card Text. You can write your own copy but there is a char limitation.' }
        );

        reply.attachments = [card];
        return reply;
    }
}

module.exports.AnswerBuilder = AnswerBuilder;
