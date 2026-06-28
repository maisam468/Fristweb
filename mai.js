    // Function to get full WhatsApp number with country code if missing
    function getFullWaNumber(waNumber) {
      // Remove non-numeric characters
      var num = waNumber.replace(/\D/g, '');
      
      // Agar number local format mein hai (10 ya 11 digits) toh Pakistan ka country code add karein
      if(num.length === 10 || num.length === 11) {
        // Agar 11 digits hain aur pehla digit 0 hai, remove karein
        if(num.length === 11 && num.charAt(0) === '0'){
          num = num.substring(1);
        }
        num = '92' + num;
      }
      
      return num;
    }

    // Show popup with clickable Facebook and WhatsApp options including logos
    function showInfo(fbURL, waNumber) {
      // Facebook clickable text with logo
      var fbLinkHTML = '<span class="clickable" onclick="window.open(\'' + fbURL + '\', \'_blank\')">' +
                         '<img src="f.png" alt="FB Logo">My Facebook ID</span>';
      
      // Process full WhatsApp number
      var fullWaNumber = getFullWaNumber(waNumber);
      // Create WhatsApp link with a pre-filled message
      var waLink = 'https://wa.me/' + fullWaNumber + '?text=Salam!%20Kaise%20hain%20aap?';
      var waLinkHTML = '<span class="clickable" onclick="window.open(\'' + waLink + '\', \'_blank\')">' +
                         '<img src="w.png" alt="WA Logo">Send WhatsApp Message</span>';
      
      document.getElementById('fbProfile').innerHTML = fbLinkHTML;
      document.getElementById('waMessage').innerHTML = waLinkHTML;
      
      document.getElementById('infoPopup').style.display = 'block';
    }

    // Close popup function
    function closePopup() {
      document.getElementById('infoPopup').style.display = 'none';
    }

    // Attach click event to friend-name elements to show popup
    document.querySelectorAll('.friend-name').forEach(function(element) {
      element.style.cursor = 'pointer';
      element.addEventListener('click', function() {
        var fb = element.getAttribute('data-fb');
        var wa = element.getAttribute('data-wa');
        showInfo(fb, wa);
      });
    });
    /*Animated*/
    document.addEventListener("DOMContentLoaded", function () {
  const friendItems = document.querySelectorAll(".friend-item");

  function animateTooltips() {
    friendItems.forEach((friend, index) => {
      const name = friend.querySelector(".friend-name").textContent.trim();

      let tooltip = friend.querySelector(".tooltip");
      if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = `Meet ${name}`;
        friend.appendChild(tooltip);
      }

      tooltip.style.width = friend.clientWidth * 0.9 + "px";

      setTimeout(() => {
        tooltip.classList.add("show-tooltip");
      }, 1000 + index * 1000);

      setTimeout(() => {
        tooltip.classList.remove("show-tooltip");
      }, 5000 + index * 1000);
    });
  }

  setInterval(animateTooltips, 6000);
  animateTooltips();
});