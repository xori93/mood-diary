const buttons = document.querySelectorAll('.mood');
const moodTitle = document.getElementById('mood_title');
const mood_message = document.getElementById('mood_message');
const body = document.body;

const moodMap = {
  happy: {
     color: '#caffbf',
      title: 'You are feeling Happy 😊',
      message: 'Smile big! Today is full of sunshine and good vibes.'
    },
    sad: {
      color: '#a0c4ff',
      title: 'You are feeling Sad 😢',
      message: 'It’s okay to feel down. Be gentle with yourself today.'
    },
    excited: {
      color: '#ffadad',
      title: 'You are feeling Excited 🤩',
      message: 'So much energy! Let that excitement guide your day!'
    },
    chill: {
      color: '#ffe066',
      title: 'You are feeling Chill 😌',
      message: 'Deep breaths. Peaceful moments are the best ones.'
    }
  
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    const { color, title, message } = moodMap[mood];

    body.style.background = color;

    moodTitle.textContent = title;
    mood_message.textContent = message;
  })
});