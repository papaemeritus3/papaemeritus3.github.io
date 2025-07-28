function createZeytin() {
  const zeytin = document.createElement('div');
  zeytin.classList.add('zeytin');
  zeytin.innerText = '🫒';
  
  // ✳️ BOYUT AYARI
  const size = 20 + Math.random() * 10; // 20–30 px
  zeytin.style.fontSize = size + 'px';

  // ✳️ YATAY KONUM
  zeytin.style.left = Math.random() * 100 + 'vw';

  // ✳️ HIZ AYARI (düşüş süresi)
  zeytin.style.animationDuration = (3 + Math.random() * 2) + 's';

  document.body.appendChild(zeytin);

  // Yere inince birikmesi için
  setTimeout(() => {
    zeytin.style.animation = 'none';
    zeytin.style.position = 'absolute';
    zeytin.style.bottom = '0';
    zeytin.style.left = zeytin.style.left;
    document.getElementById('zeytin-birikme').appendChild(zeytin);
  }, 5000);
}

// ✳️ SAYI AYARI: Kaç milisaniyede bir zeytin düşsün
setInterval(createZeytin, 1000);
