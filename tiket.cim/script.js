// Data diambil dari struktur React HomePage.jsx / Footer.jsx agar gampang di-maintain

const promos = [
  {
    id: 1,
    title: 'Diskon 40% Hotel',
    description: 'Untuk pemesanan hotel pilihan di seluruh Indonesia',
    discount: '40%',
    color: 'linear-gradient(to right, #3b82f6, #1d4ed8)',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Flash Sale Pesawat',
    description: 'Promo spesial tiket pesawat ke destinasi favorit',
    discount: '30%',
    color: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Sewa Mobil Hemat',
    description: 'Nikmati perjalanan dengan harga spesial',
    discount: '50%',
    color: 'linear-gradient(to right, #22c55e, #16a34a)',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop'
  }
];

const popularDestinations = [
  {
    name: 'Bali',
    hotels: '2,340 Hotel',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
    price: 'Mulai Rp 350.000'
  },
  {
    name: 'Jakarta',
    hotels: '3,120 Hotel',
    image: 'https://images.unsplash.com/photo-1555899434-94d1eb536e0f?w=400&h=300&fit=crop',
    price: 'Mulai Rp 280.000'
  },
  {
    name: 'Yogyakarta',
    hotels: '1,580 Hotel',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop',
    price: 'Mulai Rp 250.000'
  },
  {
    name: 'Lombok',
    hotels: '890 Hotel',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    price: 'Mulai Rp 320.000'
  }
];

const features = [
  {
    icon: '🛡️',
    title: 'Transaksi Aman',
    description: 'Pembayaran terproteksi dengan sistem keamanan terbaik'
  },
  {
    icon: '💸',
    title: 'Harga Terbaik',
    description: 'Dapatkan harga terbaik dengan banyak promo menarik'
  },
  {
    icon: '⏰',
    title: 'Support 24/7',
    description: 'Customer service siap membantu Anda kapan saja'
  },
  {
    icon: '📈',
    title: 'Rewards Points',
    description: 'Kumpulkan poin setiap transaksi untuk diskon istimewa'
  }
];

const paymentMethods = ['BCA', 'Mandiri', 'BNI', 'BRI', 'Visa', 'Mastercard', 'GoPay', 'OVO', 'DANA', 'ShopeePay'];

// Helper render function
function createElement(tag, className, children) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (typeof children === 'string') {
    el.textContent = children;
  } else if (Array.isArray(children)) {
    children.forEach((child) => child && el.appendChild(child));
  } else if (children instanceof Node) {
    el.appendChild(children);
  }
  return el;
}

function renderPromos() {
  const container = document.getElementById('promoList');
  if (!container) return;

  promos.forEach((promo) => {
    const card = createElement('div', 'card');

    const imageWrapper = createElement('div', null);
    imageWrapper.style.position = 'relative';
    imageWrapper.style.height = '12rem';
    imageWrapper.style.overflow = 'hidden';

    const img = document.createElement('img');
    img.src = promo.image;
    img.alt = promo.title;
    img.loading = 'lazy';
    img.style.transition = 'transform 0.4s';
    imageWrapper.appendChild(img);

    card.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });

    const badge = createElement('div', 'promo-badge', promo.discount);
    badge.style.backgroundImage = promo.color;
    imageWrapper.appendChild(badge);

    const body = createElement('div', 'card-body', [
      createElement('h3', 'card-title', promo.title),
      createElement('p', 'card-text', promo.description),
      (function () {
        const btn = createElement('button', 'card-link', 'Pesan Sekarang →');
        btn.type = 'button';
        btn.addEventListener('click', () => {
          alert('Fitur pemesanan belum terhubung di versi static.');
        });
        return btn;
      })()
    ]);

    card.appendChild(imageWrapper);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function renderDestinations() {
  const container = document.getElementById('destinationList');
  if (!container) return;

  popularDestinations.forEach((dest) => {
    const card = createElement('div', 'card');
    const wrapper = createElement('div', null);
    wrapper.style.position = 'relative';
    wrapper.style.height = '16rem';
    wrapper.style.overflow = 'hidden';

    const img = document.createElement('img');
    img.src = dest.image;
    img.alt = dest.name;
    img.loading = 'lazy';
    img.style.transition = 'transform 0.4s';

    card.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.08)';
    });
    card.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });

    const overlay = createElement('div', 'dest-overlay');
    const info = createElement('div', 'dest-info', [
      createElement('h3', null, dest.name),
      createElement('p', null, dest.hotels),
      createElement('p', 'dest-price', dest.price)
    ]);

    wrapper.appendChild(img);
    wrapper.appendChild(overlay);
    wrapper.appendChild(info);

    card.appendChild(wrapper);
    container.appendChild(card);
  });
}

function renderFeatures() {
  const container = document.getElementById('featureList');
  if (!container) return;

  features.forEach((feature) => {
    const item = createElement('div', 'feature-item', [
      createElement('div', 'feature-icon', feature.icon),
      createElement('h3', 'feature-title', feature.title),
      createElement('p', 'feature-text', feature.description)
    ]);
    container.appendChild(item);
  });
}

function renderPayments() {
  const container = document.getElementById('paymentList');
  if (!container) return;

  paymentMethods.forEach((m) => {
    const chip = createElement('div', 'payment-chip', m);
    container.appendChild(chip);
  });
}

function setupTabs() {
  const tabButtons = document.querySelectorAll('#searchTabs .tab-button');
  const panels = {
    flight: document.getElementById('tab-flight'),
    hotel: document.getElementById('tab-hotel'),
    train: document.getElementById('tab-train'),
    bus: document.getElementById('tab-bus'),
    car: document.getElementById('tab-car')
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (!tab) return;

      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      Object.keys(panels).forEach((key) => {
        const panel = panels[key];
        if (!panel) return;
        if (key === tab) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });
}

function setupFlightTripType() {
  const radios = document.querySelectorAll('input[name="tripType"]');
  const extraField = document.getElementById('flightExtraField');
  const passengerRow = document.getElementById('flightPassengerRow');

  if (!radios.length || !extraField || !passengerRow) return;

  function update() {
    const selected = document.querySelector('input[name="tripType"]:checked');
    const value = selected ? selected.value : 'roundtrip';
    const label = extraField.querySelector('label');

    if (value === 'roundtrip') {
      label.textContent = 'Tanggal Pulang';
      extraField.innerHTML = '';
      const lbl = document.createElement('label');
      lbl.textContent = 'Tanggal Pulang';
      const input = document.createElement('input');
      input.type = 'date';
      input.className = 'input-date';
      extraField.appendChild(lbl);
      extraField.appendChild(input);
      passengerRow.style.display = '';
    } else {
      extraField.innerHTML = '';
      const lbl = document.createElement('label');
      lbl.textContent = 'Penumpang';
      const select = document.createElement('select');
      ['1 Penumpang', '2 Penumpang', '3 Penumpang', '4+ Penumpang'].forEach((t) => {
        const opt = document.createElement('option');
        opt.textContent = t;
        select.appendChild(opt);
      });
      extraField.appendChild(lbl);
      extraField.appendChild(select);
      passengerRow.style.display = 'none';
    }
  }

  radios.forEach((r) => r.addEventListener('change', update));
  update();
}

function setupSearchButtons() {
  const flightBtn = document.getElementById('flightSearchButton');
  const hotelBtn = document.getElementById('hotelSearchButton');
  const trainBtn = document.getElementById('trainSearchButton');

  if (flightBtn) {
    flightBtn.addEventListener('click', () => {
      alert('Di versi React kamu diarahkan ke /flights. Di versi static ini bisa diarahkan ke halaman HTML lain nanti.');
    });
  }

  if (hotelBtn) {
    hotelBtn.addEventListener('click', () => {
      alert('Di versi React kamu diarahkan ke /hotels. Di versi static ini bisa diarahkan ke halaman HTML lain nanti.');
    });
  }

  if (trainBtn) {
    trainBtn.addEventListener('click', () => {
      alert('Di versi React kamu diarahkan ke /trains. Di versi static ini bisa diarahkan ke halaman HTML lain nanti.');
    });
  }
}

function setupHeaderMenus() {
  const userBtn = document.getElementById('userMenuButton');
  const userMenu = document.getElementById('userMenu');
  const mobileBtn = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (userBtn && userMenu) {
    userBtn.addEventListener('click', () => {
      userMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!userMenu.contains(e.target) && !userBtn.contains(e.target)) {
        userMenu.classList.add('hidden');
      }
    });
  }

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  renderPromos();
  renderDestinations();
  renderFeatures();
  renderPayments();

  setupTabs();
  setupFlightTripType();
  setupSearchButtons();
  setupHeaderMenus();
});
