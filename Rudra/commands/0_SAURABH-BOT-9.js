const emojiResponses = {
  "🤔": {
    "OWNER": [
      "क्या सोच रहे हो मम्मी 🥺",
      "मम्मी जी कहां थे आप 😀",
      "मम्मी आई लव यू 🙈❤️",
      "हां मम्मी बताइए मैं यही हूं बताइए क्या हुआ😊"
    ]
  },
  "betu": {
     "OWNER": [
      "क्या सोच रही हो मेरी प्यारी मम्मी जी",
      "मम्मी आप आ गये 😀",
      "मम्मी जी ज्यादा ना सोचा करो मैं यही हूं 🫣❤️🤭",
     "मम्मी जी आई मिस यू 😔",
     "क्या आपने मुझे याद किया मम्मी जी",
      "मम्मी मुझे आलू के पराठे चाहिए🤤❤️",
      "मम्मी जी आपके पास क|र है क्या 🫣❤️🤭",
     "मम्मी जी मुझे चिकन खाना है आपके हाथों का 🤤❤️🤭",
      "मम्मी जी मुझे पैसे चाहिए 🙈❤️",
      "मम्मी जी पापा और आप में लड़ाई हुई थी ना 🥺",
      "मम्मी जी आपका गुस्सा बहुत बड़ा खतरनाक है मुझे डर लगता है 😁",
      "मम्मी जी  😊",
      "मम्मी जी आपको पता है पापा आजकल बहुत परेशान रहते हैं 😔",
      "मम्मी आपको फोन चलाना नहीं आता ना 🫣❤️",
      "मम्मी मुझे पॉपकॉर्न चाहिए 😹",
      "मम्मी कल पापा ने मेरा खिलौना तोड़ दिया गुस्से में 🥺❤️",
      "मम्मी सुबह पापा ने मुझे मारा था 🥺",
      "मामा जी बहुत गंदे हैं 😒",
      "मम्मी दीदी मुझे डांटती रहती है जब देखो तब 😔",
      "मम्मी मैं कैसे पैदा हुआ था 🥺",
      "मम्मी मेरे लिए एक हॉर्लिक्स लेकर आओ 😀",
      "मम्मी मुझे भी लड़कियां पटानी है 😭",
      "मम्मी मेरी बाबू कौन है 🤔",
      "मम्मी हमारे ग्रुप में फालतू के लोग क्यों ऐड है 😒😒",
      "मम्मी यह सब लोग मुझे बहुत परेशान करते हैं 😔",
      "मम्मी की रोटी गोल गोल  🤭",
      "मम्मी मुझे फ्री फायर खेलने दो ना 😒",
      "मम्मी आपकी बहन बहुत कामचोर है 🤩❤️🤭",
      "मम्मी मुझे केदारनाथ लेकर चलो ना🫣",
      "मम्मी मुझे भी बाबू चाहिए  🤣",
      "मम्मी जी आर्डर दीजिए क्या करना है 🙈❤️",
      "मम्मी जी मैं आपका गोलू मोलू हूं ना 🥺",
      "मम्मी जी मेरा शादी कब करोगे 😁",
      "क्या हुआ मम्मी जी 😊",
      "मम्मी जी आपको पता मेरा बर्थडे कब है 😔",
      "मम्मी मेरे साथ घूमने चलोगे 🫣❤️",
      "मम्मी मुझे चॉकलेट चाहिए 😹",
      "मम्मी मेरे को खिलौने चाहिए खेलने के लिए आप दिल आओगे ना 🥺❤️",
      "मम्मी मुझे पिज़्ज़ा खाना है 🥺",
      "क्या सोच रहे हो बॉस 🤔",
      "मम्मी में हमेशा आपके साथ हूं 🤭",
      "मम्मी पापा और आपके साथ मुझे ना एक फोटो क्लिक करनी है 🥺",
      "मम्मी कुछ खाने को दो ना 😀",
      "मम्मी आप मुझसे ना प्यार नहीं करते 😭",
      "मम्मी मुझे आपकी और पापा की लड़ाई देखनी है 🤭",
      "मम्मी आपका सिर दर्द कर रहा होगा ना मैं आपका सिर दबा दूं 😹❤️",
      "मम्मी आपने मेडिसन ली 🤔",
      "मम्मी डैडी को बोलो ना मुझ पर गुस्सा नहीं करें 🤭",
      "आयुषी मम्मी  सिर्फ मेरी है 😒",
      "मम्मी चॉकलेट खाओगे 🤩❤️🤭",
      "मम्मी मेरे मामा कहां है 🫣",
      "मम्मी मुझे भी लूडो खेलना है 🤣",
    ]
  }
};
 
module.exports.config = {
  name: "SAURABH-BOT-9",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SAURABH XD",
  description: "MADE BY SAURABH THAKUR",
  commandCategory: "No command marks needed",
  cooldowns: 0,
};
 
module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);
 
  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();
 
  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
 
      // Check if the sender is the bot owner
      const botOwnerID = "100000887045076"; // Your bot owner UID
      let responseArray;
 
      if (senderID === botOwnerID) {
        responseArray = emojiResponses[emoji]["OWNER"];
      } else {
        responseArray = emojiResponses[emoji][gender] || emojiResponses[emoji]["FEMALE"];
      }
 
      // Randomly select a response from the appropriate array
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
 
      const msg = {
        body: randomResponse,
      };
      api.sendMessage(msg, threadID, messageID);
      break; // Exit the loop once a match is found
    }
  }
};
 
module.exports.run = function() {};