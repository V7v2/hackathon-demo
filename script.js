document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Firebase
    const firebaseConfig = { apiKey: "YOUR_API_KEY_HERE", authDomain: "farmspherica.firebaseapp.com" };
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

    const kb = {
        founder: "Farmspherica Innovations was founded in 2024 by Akash Gupta.",
        mission: "To revolutionize agriculture through innovative hydroponics technology.",
        tech: "We use NFT, Deep Water Culture, and Aeroponics which can reduce water usage by up to 90% compared to traditional methods.",
        team: "Our team includes Founder Akash Gupta, CTO Navaditya Singh Rana, and Research Head Tanya Gupta."
    };

    // 2. Auth Logic
    const googleBtn = document.getElementById('google-btn');
    googleBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            document.getElementById('user-display').innerText = result.user.displayName.toUpperCase();
            document.getElementById('login-screen').classList.add('hidden');
            document.getElementById('app').classList.remove('hidden');
            populateKB();
        }).catch(err => console.error("Auth error:", err));
    });

    // 3. Chat Logic
    const chatInput = document.getElementById('chat-input');
    chatInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter' && chatInput.value.trim() !== "") {
            const q = chatInput.value.toLowerCase();
            let ans = "I am the Nexus AI. Ask me about our mission, team, or tech!";
            if(q.includes('founder')) ans = kb.founder;
            else if(q.includes('mission')) ans = kb.mission;
            else if(q.includes('tech')) ans = kb.tech;
            
            document.getElementById('chat-log').innerHTML += `<p class="text-white">User: ${chatInput.value}</p><p class="text-emerald-400">Agent: ${ans}</p>`;
            chatInput.value = '';
        }
    });

    function populateKB() {
        const list = document.getElementById('kb-list');
        Object.entries(kb).forEach(([k, v]) => {
            list.innerHTML += `<div class="p-3 bg-slate-800 rounded border border-emerald-900/30"><strong>${k.toUpperCase()}:</strong> ${v}</div>`;
        });
    }
});