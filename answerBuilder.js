const { ActionTypes, ActivityTypes, CardFactory } = require('botbuilder');
const AdaptiveCard = require('./adaptiveCard.json');

class AnswerBuilder {
    async getAnswer(luisResponse) {
        switch (luisResponse.luisResult.prediction.topIntent) {
        case 'tf.int.common.basic_greetings':
            return this.greetings();

        case 'tf.int.identity.name':
            return 'This is a VerizonBot test';

        case 'tf.int.identity.age':
            return "My age is calculated in clock cycles, I've got quite a few!";

        case 'tf.int.common.pref_travel':
            return this.travel();

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
        reply.text = 'Previous text to attachments Card';
        reply.speak = 'speak';
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

        const card2 = card;
        card2.content.title = 'Greetings 2';

        const card3 = card;
        card3.content.title = 'Greetings 3';

        reply.attachments = [card, card2, card3];
        return reply;
    }

    travel() {
        const aCard = CardFactory.adaptiveCard(AdaptiveCard);
        const reply = { type: ActivityTypes.Message };
        reply.text = 'Previous text to adaptive Card';
        reply.speak = 'speak';
        reply.attachments = [aCard];
        return reply;
    }
}

module.exports.AnswerBuilder = AnswerBuilder;
