document.getElementById('showForm').addEventListener('click', function () {
   const modal = document.createElement('div')
   modal.classList = 'modal'
   modal.innerHTML = `    <div class="modal-content">
            <span class="close">&times;</span>
            <form id="emailForm">
               <label for="email">Email:</label>
               <input type="email" id="email" required>
               <br>
               <label for="name">Имя:</label>
               <input type="text" id="name" required>
               <br>
               <button class="btn__apply" type="submit">Apply</button>
            </form>
      </div>
   `;

   document.body.appendChild(modal);

   document.querySelector('.close').addEventListener('click', function () {
      modal.remove();
   });

   document.getElementById('emailForm').addEventListener('submit', function (e) {
      e.preventDefault()

      const email = document.getElementById('email').value
      const name = document.getElementById('name').value

      console.log('Email:', email)
      console.log('Имя:', name)

      sendTelegramMessage(email, name)

      modal.remove()
   })
})

function sendTelegramMessage(email, name) {
   const bot = {
      TOKEN: '6908258367:AAEj7Uxdm-yx7QtNTiKpyrP0qh-QKf94svo',
      chatId: '-1002042855130'
   }

   const telegramMessage = `Email: ${email}, Name: ${name}`;
   const TELEGRAM_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${telegramMessage}`;

   fetch(TELEGRAM_API)
      .then(response => {
         if (response.ok) {
            alert("Сообщение успешно отправлено");
         } else {
            throw new Error(`HTTP ошибка! статус: ${response.status}`);
         }
      })
      .catch(error => {
         alert(`Ошибка отправки сообщения: ${error.message}`);
      });
}