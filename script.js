const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// БАЗА ДАННЫХ (ID карт 2025 года)
const decksData = [
    {
        name: "Golem Rocket (Meta)",
        winrate: "54.1%",
        // Карты: Бэбик(Эво), Голем, Ледяной маг, Рыцарь, Мини Пекка, Ракета, Торнадо, Валькирия(Эво)
        cards: [26000015, 26000009, 26000023, 26000000, 26000018, 28000003, 28000012, 26000011],
        link: "https://link.clashroyale.com/deck/en?deck=26000015;26000009;26000023;26000000;26000018;28000003;28000012;26000011"
    },
    {
        name: "Pekka Ram Evo",
        winrate: "57.8%",
        // Эво Пекка, Эво Маг, Бандитка, Таран, Пустота, Призрачный всадник, Яд, Зап
        cards: [26000004, 26000017, 26000046, 26000016, 28000020, 26000051, 28000002, 28000008],
        link: "https://link.clashroyale.com/deck/en?deck=26000004;26000017;26000046;26000016;28000020;26000051;28000002;28000008"
    }
];

function renderDecks() {
    const list = document.getElementById('deck-list');
    
    decksData.forEach(deck => {
        const cardElements = deck.cards.map(id => {
            // Используем надежный CDN jsDelivr для получения иконок по ID
            const url = `https://cdn.jsdelivr.net/gh/RoyaleAPI/cr-api-assets@master/docs/static/img/cards-150/${id}.png`;
            return `<img class="card-img" src="${url}" alt="card" onerror="this.src='https://cdn.clashroyale.com/static/img/cards/150/${id}.png'">`;
        }).join('');

        const deckHtml = `
            <div class="deck-card">
                <div class="deck-header">
                    <strong>${deck.name}</strong>
                    <span class="winrate">WR: ${deck.winrate}</span>
                </div>
                <div class="cards-grid">
                    ${cardElements}
                </div>
                <button class="copy-button" onclick="openDeck('${deck.link}')">Копировать колоду</button>
            </div>
        `;
        list.innerHTML += deckHtml;
    });
}

function openDeck(url) {
    tg.openLink(url);
    tg.HapticFeedback.impactOccurred('medium');
}

renderDecks();
