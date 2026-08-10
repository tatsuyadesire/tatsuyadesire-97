// Dados principais
    const portfolioData = {
      name: "B. Tatsuya",
      nickname: "Lou",
      role: "Analista de Dados",
      location: "Londrina / PR",
      focus: "Análise de Dados · Automação · Machine Learning",
      bio: "Discente de Ciência de Dados e Analista de Dados com atuação em automação de tarefas, otimização de processos e apoio à tomada de decisões. Trabalho principalmente com Python, SQL e VBA, criando controles automatizados, dashboards e ferramentas para tornar atividades operacionais mais eficientes. Minha trajetória na indústria fortaleceu uma visão prática de processos, melhoria contínua e resolução de problemas. Também possuo conhecimentos em métodos ágeis, Scrum, comunicação e organização de projetos.",
      professionalInterest: "Gosto de resolver problemas em diferentes escalas: de automações simples em Excel e consultas SQL a processos mais complexos, análises preditivas e soluções orientadas por dados.",
      status: "OPEN_TO_WORK // FREELANCE // PROJECTS // NETWORKING",
      languages: [
        { name: "Português", level: "Fluente" },
        { name: "Inglês", level: "Intermediário" }
      ],
      experience: [
        {
          period: "2023 — NOW",
          role: "Analista de Custos Pleno",
          company: "Grupo Dallon",
          description: "Atuação com análise de vendas e custos, desenvolvimento de automações para processos internos e construção de soluções voltadas à eficiência operacional e organização de informações.",
          tech: ["SQL", "Python", "VBA", "Git"]
        },
        {
          period: "TRAJETÓRIA INTERNA",
          role: "Aprendiz → áreas operacionais e projetos → Analista",
          company: "Grupo Dallon",
          description: "Minha trajetória na empresa começou como aprendiz e evoluiu por diferentes frentes, incluindo contato com áreas operacionais e projetos, até chegar à posição de Analista. Esse percurso ampliou minha visão sobre processos, rotina industrial, melhoria contínua e resolução prática de problemas.",
          tech: ["Processos", "Projetos", "Melhoria Contínua", "Análise"]
        }
      ],
      education: [
        {
          period: "2025 — 2027",
          course: "Tecnólogo em Ciência de Dados",
          institution: "Anhanguera",
          degree: "Graduação · Em andamento"
        },
        {
          period: "2019 — 2022",
          course: "Eletromecânica",
          institution: "IFPR — Campus Jacarezinho",
          degree: "Técnico"
        }
      ],
      complementaryTraining: [
        "Gestão de Projetos",
        "Yellow Belt em Lean Six Sigma",
        "Assistente Administrativo",
        "Técnico em Auxiliar de Alimentador de Produção",
        "Design Gráfico — Photoshop e Illustrator",
        "Edição Audiovisual — Premiere"
      ],
      competencies: [
        "Gestão de Projetos",
        "Métodos Ágeis",
        "Scrum",
        "Comunicação",
        "Organização de Projetos",
        "Melhoria Contínua",
        "Desenho Técnico",
        "Modelagem 3D com SolidWorks",
        "Automação de Processos",
        "Análise de Dados",
        "Pensamento Analítico",
        "Adaptabilidade",
        "Criatividade",
        "Proatividade"
      ],
      culturalProjects: [
        {
          name: "Balaio Cultural",
          role: "Organização cultural",
          context: "IFPR"
        },
        {
          name: "Feirinha da Ágora",
          role: "Organização cultural",
          context: "UENP"
        },
        {
          name: "GeniusCon",
          role: "Design Gráfico",
          context: "2021 — 2023"
        }
      ],
      otherExperience: [
        "Fotografia freelancer",
        "Edição de vídeo e produção audiovisual",
        "Design gráfico",
        "Bartender e coquetelaria"
      ],
      projects: [
        {
          name: "Employee Turnover Prediction",
          type: "Projeto pessoal · Machine Learning",
          description: "Pipeline completo de Machine Learning para prever rotatividade de funcionários utilizando o IBM HR Analytics. O projeto percorre todo o fluxo de Ciência de Dados, da análise exploratória à explicabilidade do modelo e geração de relatórios de risco.",
          motivation: "Desenvolvido para aprofundar experiência prática e familiaridade com ferramentas de Ciência de Dados e Machine Learning.",
          details: "Foram comparados modelos de Regressão Logística, Random Forest e XGBoost. O Balanced XGBoost foi selecionado por apresentar o melhor equilíbrio entre Precision e Recall. A explicabilidade foi implementada com SHAP para identificar os fatores de maior influência sobre o risco de turnover.",
          results: "Balanced XGBoost · Accuracy 85,37% · Precision 57,14% · Recall 34,04% · F1 42,67% · ROC-AUC 75,14%",
          tech: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "SHAP", "Machine Learning"],
          live: "#",
          github: "https://github.com/tatsuyadesire/employee-turnover-prediction"
        },
        {
          name: "NLP com Python e NLTK",
          type: "Projeto acadêmico · Processamento de Linguagem Natural",
          description: "Projeto desenvolvido para estudos na unidade de Processamento de Linguagem Natural do curso de Ciência de Dados. Utiliza Python e a biblioteca NLTK para aplicar técnicas fundamentais de NLP diretamente no Visual Studio Code.",
          motivation: "Explorar na prática os fundamentos de Processamento de Linguagem Natural e consolidar o uso da biblioteca NLTK em diferentes etapas de tratamento linguístico.",
          details: "O projeto implementa segmentação em sentenças e palavras, remoção de stopwords, stemming, lematização e POS Tagging (marcação morfossintática), formando um pequeno laboratório prático de pré-processamento de linguagem natural.",
          results: "PIPELINE: sentence tokenization → word tokenization → stopwords → stemming → lemmatization → POS tagging",
          tech: ["Python", "NLTK", "NLP", "Visual Studio Code"],
          live: "#",
          github: "https://github.com/tatsuyadesire/nlp-python-nltk"
        }
      ],
      skills: [
        { name: "Python", category: "DATA_CORE", level: "PRIMARY" },
        { name: "VBA", category: "AUTOMATION", level: "PRIMARY" },
        { name: "SQL", category: "DATA_CORE", level: "PRIMARY" },
        { name: "R", category: "DATA_CORE", level: "WORKING" },
        { name: "Git", category: "TOOLS", level: "WORKING" },
        { name: "VS Code", category: "TOOLS", level: "WORKING" },
        { name: "Machine Learning", category: "DATA_SCIENCE", level: "WORKING" },
        { name: "Análise de Dados", category: "DATA_SCIENCE", level: "PRIMARY" },
        { name: "Photoshop", category: "CREATIVE", level: "WORKING" },
        { name: "HTML", category: "WEB", level: "FAMILIAR" },
        { name: "Illustrator", category: "CREATIVE", level: "FAMILIAR" }
      ],
      contacts: {
        email: "",
        linkedin: "https://www.linkedin.com/in/l-l-rojas-de-arruda-988828296/",
        github: "https://github.com/tatsuyadesire"
      },
      personality: {
        soundtrack: "Post-punk · cultura gótica · System of a Down",
        creativeProject: "Agatha Sepulta",
        creativeBackground: "Experiência em audiovisual e design desde 2018, com atuação em edição de vídeo, design gráfico, fotografia freelancer, produção de conteúdo e participação na organização de eventos e feiras culturais.",
        curiosities: ["Café", "Arte experimental", "Post-punk", "Cultura gótica", "Produção audiovisual"]
      },
      spotify: {
        embedUrl: "https://open.spotify.com/embed/playlist/4q1WUAmxvHidA7KlOJ7Rh3?utm_source=generator&theme=0"
      }
    };
    const state = {
      z: 10,
      openWindows: new Set(),
      active: null,
      minimized: new Set(),
      prevRects: new Map(),
      clockClicks: 0
    };

    const $ = (s, root=document) => root.querySelector(s);
    const $$ = (s, root=document) => [...root.querySelectorAll(s)];

    function safeLink(url, label) {
      if (!url || url === "#") return `<span class="tag">${label}: adicionar link</span>`;
      return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
    }

    function renderData() {
      // Spotify não é carregado aqui.
      // O iframe externo só recebe a URL quando a janela Music Player é aberta.
      $("#aboutContent").innerHTML = `
        <div class="hero-bio">
          <div class="avatar"><img src="tatsuya_profile.png" alt="Imagem de perfil de B. Tatsuya"></div>
          <div>
            <h2>${portfolioData.name} <span class="tag">Lou</span></h2>
            <p><strong>${portfolioData.role}</strong></p>
            <p>${portfolioData.location} // ${portfolioData.focus}</p>
            <p>${portfolioData.bio}</p>
            <p><b>WHAT_I_LIKE_TO_SOLVE.txt</b><br>${portfolioData.professionalInterest}</p>
            <p><span class="tag">STATUS: ${portfolioData.status}</span></p>
            <p>${portfolioData.languages.map(l => `<span class="tag">${l.name}: ${l.level}${l.note ? " · " + l.note : ""}</span>`).join("")}</p>
          </div>
        </div>
      `;

      $("#experienceContent").innerHTML = `
        <h2>SYSTEM EXPERIENCE LOG</h2>
        ${portfolioData.experience.map(item => `
          <article class="timeline-item">
            <strong>[${item.period}]</strong><br>
            <b>${item.role}</b> @ ${item.company}
            <p>${item.description}</p>
            <p>${item.tech.map(t => `<span class="tag">${t}</span>`).join("")}</p>
          </article>
        `).join("")}
        <h2 style="margin-top:18px">EDUCATION.LOG</h2>
        ${portfolioData.education.map(item => `
          <article class="timeline-item">
            <strong>[${item.period}]</strong><br>
            <b>${item.course}</b><br>
            ${item.institution} · ${item.degree}
          </article>
        `).join("")}
      `;

      $("#projectsContent").innerHTML = `
        <h2>INSTALLED PROJECTS</h2>
        ${portfolioData.projects.map(p => `
          <article class="project-card">
            <h3>${p.name}</h3>
            <span class="tag">${p.type}</span>
            <p>${p.description}</p>
            <p><b>WHY_BUILD_THIS.txt</b><br>${p.motivation}</p>
            <p>${p.details}</p>
            <p><b>MODEL_OUTPUT:</b> ${p.results}</p>
            <p>${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}</p>
            <p>${safeLink(p.github, "GitHub Repository")}</p>
          </article>
        `).join("")}
      `;

      const grouped = Object.groupBy
        ? Object.groupBy(portfolioData.skills, s => s.category)
        : portfolioData.skills.reduce((acc, s) => ((acc[s.category] ||= []).push(s), acc), {});

      $("#skillsContent").innerHTML = `
        <h2>LOADED MODULES</h2>
        ${Object.entries(grouped).map(([category, skills]) => `
          <div class="panel" style="margin-bottom:9px">
            <b>${category}.dll</b><br><br>
            ${skills.map(s => `<span class="tag">${s.name}</span>`).join("")}
          </div>
        `).join("")}
        <div class="panel">
          <b>CREATIVE_ARCHIVE.dat</b>
          <p>${portfolioData.personality.creativeBackground}</p>
          <p>Projeto criativo:
            <a href="https://open.spotify.com/intl-pt/artist/2fkMzB82VphBTaEHOazlkj"
               target="_blank"
               rel="noopener"
               title="Abrir Agatha Sepulta no Spotify"><b>${portfolioData.personality.creativeProject}</b></a>
          </p>
          ${portfolioData.personality.curiosities.map(x => `<span class="tag">${x}</span>`).join("")}
        </div>
      `;

      $("#competenciesContent").innerHTML = `
        <h2>COMPETENCIES & TRAINING</h2>
        <div class="panel" style="margin-bottom:10px">
          <b>COMPLEMENTARY_TRAINING/</b><br><br>
          ${portfolioData.complementaryTraining.map(x => `<span class="tag">${x}</span>`).join("")}
        </div>
        <div class="panel" style="margin-bottom:10px">
          <b>CORE_COMPETENCIES.sys</b><br><br>
          ${portfolioData.competencies.map(x => `<span class="tag">${x}</span>`).join("")}
        </div>
        <div class="panel" style="margin-bottom:10px">
          <b>CULTURAL_PROJECTS.log</b><br><br>
          ${portfolioData.culturalProjects.map(p => `<p><b>${p.name}</b> // ${p.role} // ${p.context}</p>`).join("")}
        </div>
        <div class="panel">
          <b>OTHER_EXPERIENCE.dat</b><br><br>
          ${portfolioData.otherExperience.map(x => `<span class="tag">${x}</span>`).join("")}
        </div>
      `;

      $("#contactContent").innerHTML = `
        <h2>CONTACT HUB</h2>
        <div class="panel">
          ${portfolioData.contacts.email ? `<p>MAIL // <a href="mailto:${portfolioData.contacts.email}">${portfolioData.contacts.email}</a></p>` : ""}
          <p>GITHUB // <a href="${portfolioData.contacts.github}" target="_blank" rel="noopener">tatsuyadesire</a></p>
          <p>LINKEDIN // <a href="${portfolioData.contacts.linkedin}" target="_blank" rel="noopener">connect.exe</a></p>
          <p style="color:var(--muted)">CURRENT_STATUS // aberta a oportunidades, projetos, freelance e networking.</p>
        </div>
      `;
    }
    function makeStars() {
      const root = $("#stars");
      for (let i = 0; i < 55; i++) {
        const s = document.createElement("i");
        s.className = "star";
        s.style.left = Math.random() * 100 + "%";
        s.style.top = Math.random() * 100 + "%";
        s.style.animationDelay = (Math.random() * 2.6) + "s";
        root.appendChild(s);
      }
    }

    // MOTOR DE ÁUDIO DA INTERFACE DREAMGAZE
    // Web Audio: não requer arquivos de áudio externos.

    const soundState = {
      ctx: null,
      muted: localStorage.getItem("tatsuyadesire97_sfx_muted") === "1"
    };

    function getAudioContext() {
      if (!soundState.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return null;
        soundState.ctx = new AudioCtx();
      }
      if (soundState.ctx.state === "suspended") soundState.ctx.resume();
      return soundState.ctx;
    }

    function tone(freq=440, duration=.06, volume=.025, type="sine", endFreq=null, delay=0) {
      if (soundState.muted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(1,endFreq), now + duration);
      gain.gain.setValueAtTime(.0001, now);
      gain.gain.exponentialRampToValueAtTime(volume, now + .008);
      gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(now); osc.stop(now + duration + .02);
    }

    function noise(duration=.04, volume=.012) {
      if (soundState.muted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const len = Math.max(1, Math.floor(ctx.sampleRate * duration));
      const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i=0; i<len; i++) data[i] = (Math.random()*2-1) * (1-i/len);
      const src = ctx.createBufferSource();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      filter.type = "bandpass"; filter.frequency.value = 1800; filter.Q.value = .8;
      gain.gain.value = volume;
      src.buffer = buffer; src.connect(filter); filter.connect(gain); gain.connect(ctx.destination); src.start();
    }

    function playSfx(name) {
      if (soundState.muted) return;
      switch (name) {
        case "click":
          tone(920,.025,.012,"square",720);
          break;
        case "open":
          tone(330,.055,.018,"sine",520);
          tone(660,.085,.012,"sine",820,.035);
          break;
        case "close":
          tone(520,.06,.017,"sine",260);
          noise(.035,.006);
          break;
        case "minimize":
          tone(430,.06,.014,"triangle",250);
          break;
        case "maximize":
          tone(360,.045,.014,"triangle",590);
          break;
        case "start":
          tone(260,.045,.014,"square",330);
          tone(520,.055,.010,"sine",650,.035);
          break;
        case "terminal":
          tone(740,.025,.010,"square",620);
          noise(.025,.004);
          break;
        case "ghost":
          tone(185,.55,.018,"sine",92);
          tone(277,.7,.010,"triangle",138,.06);
          break;
      }
    }


    const ambientState = {
      started: false,
      master: null,
      noise: null,
      nodes: []
    };

    function startAmbientSound() {
      if (ambientState.started || soundState.muted) return;
      const ctx = getAudioContext();
      if (!ctx) return;

      ambientState.started = true;
      const master = ctx.createGain();
      master.gain.setValueAtTime(.0001, ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(.060, ctx.currentTime + 1.8);
      master.connect(ctx.destination);
      ambientState.master = master;

      [
        [55, "sine", .22],
        [110, "sine", .070],
        [220, "triangle", .022],
        [329.63, "sine", .010],
        [440, "sine", .007]
      ].forEach(([freq, type, gainValue]) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.value = gainValue;
        osc.connect(gain);
        gain.connect(master);
        osc.start();
        ambientState.nodes.push(osc);
      });

      const seconds = 2;
      const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let smooth = 0;
      for (let i = 0; i < data.length; i++) {
        smooth = smooth * .986 + (Math.random() * 2 - 1) * .014;
        data[i] = smooth;
      }

      const src = ctx.createBufferSource();
      const filter = ctx.createBiquadFilter();
      const noiseGain = ctx.createGain();
      src.buffer = buffer;
      src.loop = true;
      filter.type = "bandpass";
      filter.frequency.value = 840;
      filter.Q.value = .28;
      noiseGain.gain.value = .17;
      src.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(master);
      src.start();
      ambientState.noise = src;

      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = .065;
      lfoGain.gain.value = .008;
      lfo.connect(lfoGain);
      lfoGain.connect(master.gain);
      lfo.start();
      ambientState.nodes.push(lfo);

      // Uma oscilação desafinada quase inaudível para criar uma atmosfera de "máquina dos sonhos".
      const drift = ctx.createOscillator();
      const driftGain = ctx.createGain();
      drift.type = "sine";
      drift.frequency.value = 164.5;
      drift.detune.value = -7;
      driftGain.gain.value = .010;
      drift.connect(driftGain);
      driftGain.connect(master);
      drift.start();
      ambientState.nodes.push(drift);
    }

    function syncAmbientMute() {
      if (!ambientState.master || !soundState.ctx) return;
      const now = soundState.ctx.currentTime;
      ambientState.master.gain.cancelScheduledValues(now);
      ambientState.master.gain.setTargetAtTime(soundState.muted ? .0001 : .060, now, .10);
    }

    function setupSoundFX() {
      const toggle = $("#soundToggle");
      const render = () => {
        toggle.textContent = soundState.muted ? "× AUDIO" : "♪ AUDIO";
        toggle.classList.toggle("muted", soundState.muted);
        toggle.title = soundState.muted ? "Ativar áudio" : "Silenciar SFX + ambiente";
      };

      render();

      const unlockAmbient = () => {
        if (!soundState.muted) startAmbientSound();
      };
      document.addEventListener("pointerdown", unlockAmbient, { once: true });
      document.addEventListener("keydown", unlockAmbient, { once: true });

      toggle.addEventListener("click", e => {
        e.stopPropagation();
        soundState.muted = !soundState.muted;
        localStorage.setItem("tatsuyadesire97_sfx_muted", soundState.muted ? "1" : "0");
        render();

        if (!soundState.muted) {
          if (!ambientState.started) startAmbientSound();
          syncAmbientMute();
          playSfx("open");
        } else {
          syncAmbientMute();
        }
      });

      document.addEventListener("pointerdown", e => {
        if (e.target.closest("button, .file, .desktop-icon, .start-item, .occult-mark")) {
          if (!e.target.closest("#soundToggle")) playSfx("click");
        }
      });
    }

    function windowId(name) { return `win-${name}`; }

    function focusWindow(win) {
      if (!win) return;
      state.z += 1;
      win.style.zIndex = state.z;
      $$(".window").forEach(w => w.classList.add("inactive"));
      win.classList.remove("inactive");
      state.active = win.id;
      updateTaskbar();
    }

    let spotifyLoaded = false;

    function loadSpotifyOnDemand() {
      if (spotifyLoaded) return;

      const player = $("#spotifyPlayer");
      const consent = $("#spotifyConsent");
      const url = portfolioData.spotify?.embedUrl;

      if (!player || !url) return;

      player.hidden = false;
      player.src = url;
      spotifyLoaded = true;

      if (consent) consent.hidden = true;
    }

    function setupSpotifyPrivacyGate() {
      const button = $("#loadSpotifyBtn");
      const cancelButton = $("#cancelSpotifyBtn");

      if (button) {
        button.addEventListener("click", () => {
          loadSpotifyOnDemand();
          setTimeout(() => {
            const bezel = document.querySelector("#win-music .spotify-bezel");
            if (bezel) bezel.dispatchEvent(new Event("resize"));
          }, 0);
        });
      }

      if (cancelButton) {
        cancelButton.addEventListener("click", () => {
          const musicWin = $("#win-music");
          if (musicWin) closeWindow(musicWin);
        });
      }
    }

    function openWindow(name) {
      const win = document.getElementById(windowId(name));
      if (!win) return;
      const wasOpen = win.classList.contains("open") && !state.minimized.has(win.id);
      win.classList.add("open");
      if (!wasOpen) playSfx("open");
      state.openWindows.add(win.id);
      state.minimized.delete(win.id);
      focusWindow(win);
      updateTaskbar();

      // O Spotify NÃO carrega ao abrir a janela.
      // A conexão externa só começa após o clique explícito no botão.
      if (name === "terminal") setTimeout(() => $("#terminalInput").focus(), 40);
      $("#startMenu").classList.remove("open");
      $("#startBtn").classList.remove("pressed");
    }

    function closeWindow(win) {
      playSfx("close");
      win.classList.remove("open");
      state.openWindows.delete(win.id);
      state.minimized.delete(win.id);
      updateTaskbar();
    }

    function minimizeWindow(win) {
      playSfx("minimize");
      win.classList.remove("open");
      state.minimized.add(win.id);
      updateTaskbar();
    }

    function toggleMaximize(win) {
      playSfx("maximize");
      if (!win.classList.contains("maximized")) {
        state.prevRects.set(win.id, {
          left: win.style.left, top: win.style.top, width: win.style.width, height: win.style.height
        });
        win.classList.add("maximized");
      } else {
        win.classList.remove("maximized");
        const r = state.prevRects.get(win.id);
        if (r) Object.assign(win.style, r);
      }
      focusWindow(win);
    }

    function updateTaskbar() {
      const taskList = $("#taskList");
      taskList.innerHTML = "";
      state.openWindows.forEach(id => {
        const win = document.getElementById(id);
        const btn = document.createElement("button");
        btn.className = "retro-btn task-btn";
        if (state.active === id && !state.minimized.has(id)) btn.classList.add("pressed");
        btn.textContent = win.dataset.title || id;
        btn.addEventListener("click", () => {
          if (state.minimized.has(id)) {
            win.classList.add("open");
            state.minimized.delete(id);
            focusWindow(win);
          } else if (state.active === id && win.classList.contains("open")) {
            minimizeWindow(win);
          } else {
            win.classList.add("open");
            focusWindow(win);
          }
        });
        taskList.appendChild(btn);
      });
    }

    function setupWindowControls() {
      $$(".window").forEach(win => {
        $(".close-btn", win).addEventListener("click", () => closeWindow(win));
        $(".min-btn", win).addEventListener("click", () => minimizeWindow(win));
        $(".max-btn", win).addEventListener("click", () => toggleMaximize(win));
        win.addEventListener("mousedown", () => focusWindow(win));

        const titlebar = $(".titlebar", win);
        let dragging = false, ox = 0, oy = 0;

        titlebar.addEventListener("mousedown", (e) => {
          if (e.target.closest("button") || win.classList.contains("maximized") || innerWidth <= 720) return;
          dragging = true;
          const rect = win.getBoundingClientRect();
          ox = e.clientX - rect.left;
          oy = e.clientY - rect.top;
          focusWindow(win);
        });

        document.addEventListener("mousemove", (e) => {
          if (!dragging) return;
          const maxX = innerWidth - win.offsetWidth;
          const maxY = innerHeight - parseInt(getComputedStyle(document.documentElement).getPropertyValue("--taskbar-h")) - 30;
          win.style.left = Math.max(0, Math.min(e.clientX - ox, maxX)) + "px";
          win.style.top = Math.max(0, Math.min(e.clientY - oy, maxY)) + "px";
        });

        document.addEventListener("mouseup", () => dragging = false);
      });
    }

    function setupOpeners() {
      $$("[data-open]").forEach(el => {
        let lastTap = 0;
        el.addEventListener("click", () => {
          $$(".desktop-icon").forEach(x => x.classList.remove("selected"));
          if (el.classList.contains("desktop-icon")) el.classList.add("selected");
          if (!el.classList.contains("desktop-icon")) openWindow(el.dataset.open);
        });
        el.addEventListener("dblclick", () => openWindow(el.dataset.open));
        el.addEventListener("keydown", e => {
          if (e.key === "Enter") openWindow(el.dataset.open);
        });
        el.addEventListener("touchend", () => {
          const now = Date.now();
          if (now - lastTap < 350) openWindow(el.dataset.open);
          lastTap = now;
        });
      });

      $$(".file").forEach(el => {
        if (el.dataset.open) el.addEventListener("dblclick", () => openWindow(el.dataset.open));
      });
    }

    function toast(message, ms=2600) {
      const t = $("#toast");
      t.textContent = message;
      t.classList.add("show");
      clearTimeout(t._timer);
      t._timer = setTimeout(() => t.classList.remove("show"), ms);
    }


    function runShutdownSequence() {
      const screen = $("#shutdownScreen");
      const title = $("#shutdownTitle");
      const text = $("#shutdownText");
      const status = $("#shutdownStatus");

      screen.classList.add("show");
      title.textContent = "SAVING DREAM STATE...";
      text.textContent = "Closing open memories.";
      status.textContent = "SYSTEM // preparing shutdown";

      clearTimeout(runShutdownSequence.t1);
      clearTimeout(runShutdownSequence.t2);
      clearTimeout(runShutdownSequence.t3);

      runShutdownSequence.t1 = setTimeout(() => {
        title.textContent = "CLOSING OPEN MEMORIES...";
        text.textContent = "Writing last known state to disk.";
        status.textContent = "MEMORY // OK";
      }, 650);

      runShutdownSequence.t2 = setTimeout(() => {
        title.textContent = "SIGNAL LOST.";
        text.textContent = "TatsuyaDesire/97 has entered dream state.";
        status.textContent = "DREAM STATE // ACTIVE";
      }, 1350);

      runShutdownSequence.t3 = setTimeout(() => {
        title.textContent = "It is now safe to leave this website.";
        text.textContent = "TatsuyaDesire/97 has entered dream state.";
        status.textContent = "";
      }, 2200);
    }

    function restartFromShutdown() {
      clearTimeout(runShutdownSequence.t1);
      clearTimeout(runShutdownSequence.t2);
      clearTimeout(runShutdownSequence.t3);
      $("#shutdownScreen").classList.remove("show");
      $("#shutdownTitle").textContent = "It is now safe to leave this website.";
      $("#shutdownText").textContent = "TatsuyaDesire/97 has entered dream state.";
      $("#shutdownStatus").textContent = "";
      playSfx("open");
    }

    function setupStart() {
      const btn = $("#startBtn");
      const menu = $("#startMenu");
      btn.addEventListener("click", e => {
        e.stopPropagation();
        menu.classList.toggle("open");
        playSfx("start");
        btn.classList.toggle("pressed", menu.classList.contains("open"));
      });
      document.addEventListener("click", e => {
        if (!menu.contains(e.target) && e.target !== btn) {
          menu.classList.remove("open");
          btn.classList.remove("pressed");
        }
      });
      $("#shutdownItem").addEventListener("click", runShutdownSequence);
      $("#restartBtn").addEventListener("click", restartFromShutdown);
    }

    function setupClock() {
      const clock = $("#clock");
      const update = () => {
        const d = new Date();
        clock.textContent = d.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
      };
      update();
      setInterval(update, 1000);
      clock.addEventListener("click", () => {
        state.clockClicks++;
        if (state.clockClicks >= 7) {
          toast("00:00 // the dream noticed you.");
          state.clockClicks = 0;
        }
      });
    }

    function appendTerminal(text="") {
      const out = $("#terminalOutput");
      const div = document.createElement("div");
      div.className = "terminal-line";
      div.textContent = text;
      out.appendChild(div);
      $("#terminal").scrollTop = $("#terminal").scrollHeight;
    }

    function runCommand(input) {
      const cmd = input.trim().toLowerCase();
      appendTerminal(`C:\\TATSUYA> ${input}`);
      const commands = {
        help: "help · about · experience · skills · projects · contact · clear · whoami · date · theme · ghost",
        about: `${portfolioData.name} — ${portfolioData.role}\\n${portfolioData.bio}`,
        experience: portfolioData.experience.map(x => `${x.period} | ${x.role} @ ${x.company}`).join("\\n"),
        skills: portfolioData.skills.map(x => `${x.name}: ${x.level}%`).join("\\n"),
        projects: portfolioData.projects.map(x => x.name).join("\\n"),
        contact: `${portfolioData.contacts.email}\\n${portfolioData.contacts.linkedin}\\n${portfolioData.contacts.github}`,
        whoami: portfolioData.name,
        date: new Date().toString(),
        ghost: "GHOST PROCESS STARTED..."
      };
      if (cmd === "clear") {
        $("#terminalOutput").innerHTML = "";
        return;
      }
      if (cmd === "ghost") {
        const enabled = document.body.classList.toggle("ghost-mode");
        if (enabled) playSfx("ghost");
        appendTerminal(enabled ? "GHOST PROCESS STARTED..." : "GHOST PROCESS TERMINATED.");
        toast(enabled ? "WARNING // spectral interference detected" : "ghost.exe detached // signal stable");
        return;
      }

      if (cmd === "theme") {
        appendTerminal("Available themes:");
        appendTerminal("  dreamgaze  // DREAMGAZE_PDX (default)");
        appendTerminal("  spectral   // SPECTRAL_PURPLE_97");
        appendTerminal("  moonmilk   // pale blue / silver haze");
        appendTerminal("  rosefog    // dusty pink / nocturnal bloom");
        appendTerminal("  liminalsea // drowned teal / analog dream");
        appendTerminal('Use: theme <name>  // ex: theme spectral');
        return;
      }

      if (cmd.startsWith("theme ")) {
        const themeName = cmd.split(/\s+/)[1];
        if (applyTheme(themeName)) {
          appendTerminal(`Theme loaded: ${themeName.toUpperCase()}`);
          toast(`theme://${themeName} // dream palette mounted`);
        } else {
          appendTerminal(`Unknown theme: ${themeName}`);
          appendTerminal("Type 'theme' to list available themes.");
        }
        return;
      }

      appendTerminal(commands[cmd] ?? `Bad command or file name: ${cmd || "(empty)"}`);
    }

    const themeClasses = ["theme-spectral", "theme-moonmilk", "theme-rosefog", "theme-liminalsea"];

    function applyTheme(name, persist=true) {
      const themes = {
        dreamgaze: null,
        spectral: "theme-spectral",
        moonmilk: "theme-moonmilk",
        rosefog: "theme-rosefog",
        liminalsea: "theme-liminalsea"
      };
      if (!(name in themes)) return false;
      document.body.classList.remove(...themeClasses);
      if (themes[name]) document.body.classList.add(themes[name]);
      if (persist) localStorage.setItem("tatsuyadesire97_theme", name);
      return true;
    }

    function restoreTheme() {
      const saved = localStorage.getItem("tatsuyadesire97_theme") || "dreamgaze";
      applyTheme(saved, false);
    }

    function setupTerminal() {
      const input = $("#terminalInput");
      appendTerminal("TatsuyaDesire/97 Terminal v0.97");
      appendTerminal('Type "help" for available commands.');
      input.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          const value = input.value;
          input.value = "";
          playSfx("terminal");
          runCommand(value);
        }
      });
    }

    function setupGothicEasterEggs() {
      const mark = $("#occultMark");
      let clicks = 0;
      mark.addEventListener("click", () => {
        clicks++;
        if (clicks === 3) toast("archive://agatha_sepulta // signal detected");
        if (clicks >= 7) {
          document.body.classList.toggle("ghost-mode");
          toast("the moon remembers what the daylight forgets.");
          clicks = 0;
        }
      });

      document.addEventListener("keydown", e => {
        if (e.key.toLowerCase() === "g" && e.altKey) {
          toast("GOTHIC MODE // no church bells found, only reverb.");
          document.body.classList.toggle("ghost-mode");
        }
      });
    }

    function setupGhostFile() {
      $("#ghostFile").addEventListener("dblclick", () => {
        document.body.classList.add("ghost-mode");
        playSfx("ghost");
        toast("WARNING // definitely_not_a_ghost.exe // visual anomaly detected", 5200);
        setTimeout(() => {
          document.body.classList.remove("ghost-mode");
          toast("ghost.exe vanished // signal returned to normal");
        }, 5200);
      });
    }


    function cssColor(name, fallback) {
      const value = getComputedStyle(document.body).getPropertyValue(name).trim();
      return value || fallback;
    }

    function hexToRgba(color, alpha) {
      if (!color) return `rgba(255,255,255,${alpha})`;
      if (color.startsWith("rgb")) {
        const nums = color.match(/[\d.]+/g);
        if (!nums || nums.length < 3) return `rgba(255,255,255,${alpha})`;
        return `rgba(${nums[0]},${nums[1]},${nums[2]},${alpha})`;
      }
      let hex = color.replace("#", "").trim();
      if (hex.length === 3) hex = hex.split("").map(x => x + x).join("");
      if (hex.length !== 6) return `rgba(255,255,255,${alpha})`;
      const r = parseInt(hex.slice(0,2),16);
      const g = parseInt(hex.slice(2,4),16);
      const b = parseInt(hex.slice(4,6),16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    function setupSnake() {
      const canvas = $("#snakeCanvas");
      const ctx = canvas.getContext("2d");
      const scoreEl = $("#snakeScore");
      const highEl = $("#snakeHighScore");
      const startBtn = $("#snakeStartBtn");
      const pauseBtn = $("#snakePauseBtn");

      const grid = 21;
      const cell = canvas.width / grid;
      let snake = [];
      let food = {x: 14, y: 10};
      let dir = {x: 1, y: 0};
      let nextDir = {x: 1, y: 0};
      let score = 0;
      let high = Number(localStorage.getItem("tatsuyadesire97_snake_high") || 0);
      let timer = null;
      let paused = false;
      let running = false;
      let dreamTrail = [];

      highEl.textContent = String(high).padStart(4, "0");

      function reset() {
        snake = [{x: 8, y: 10}, {x: 7, y: 10}, {x: 6, y: 10}];
        dir = {x: 1, y: 0};
        nextDir = {x: 1, y: 0};
        score = 0;
        paused = false;
        running = true;
        dreamTrail = [];
        scoreEl.textContent = "0000";
        placeFood();
        draw();
        if (timer) clearInterval(timer);
        timer = setInterval(tick, 115);
        pauseBtn.textContent = "PAUSE";
      }

      function placeFood() {
        do {
          food = {
            x: Math.floor(Math.random() * grid),
            y: Math.floor(Math.random() * grid)
          };
        } while (snake.some(s => s.x === food.x && s.y === food.y));
      }

      function tick() {
        if (!running || paused) return;
        dir = nextDir;
        const head = {
          x: snake[0].x + dir.x,
          y: snake[0].y + dir.y
        };

        if (
          head.x < 0 || head.y < 0 ||
          head.x >= grid || head.y >= grid ||
          snake.some(s => s.x === head.x && s.y === head.y)
        ) {
          gameOver();
          return;
        }

        snake.unshift(head);

        dreamTrail.unshift({ x: head.x, y: head.y, life: 1 });
        dreamTrail = dreamTrail
          .map(t => ({ ...t, life: t.life - .08 }))
          .filter(t => t.life > 0)
          .slice(0, 14);

        if (head.x === food.x && head.y === food.y) {
          score += 10;
          scoreEl.textContent = String(score).padStart(4, "0");
          if (score > high) {
            high = score;
            localStorage.setItem("tatsuyadesire97_snake_high", String(high));
            highEl.textContent = String(high).padStart(4, "0");
          }
          placeFood();
        } else {
          snake.pop();
        }
        draw();
      }

      function gameOver() {
        running = false;
        clearInterval(timer);
        draw();
        ctx.fillStyle = "rgba(9,7,13,.78)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = cssColor("--lilac", "#d7c7ff");
        ctx.font = "bold 24px Courier New";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 8);
        ctx.font = "14px Courier New";
        ctx.fillText("press START / RESTART", canvas.width / 2, canvas.height / 2 + 22);
      }

      function draw() {
        const bg = cssColor("--bg", "#09070d");
        const ink = cssColor("--ink", "#f5f1ff");
        const magenta = cssColor("--magenta", "#e79bdc");
        const cyan = cssColor("--cyan", "#a8f0ed");
        const lilac = cssColor("--lilac", "#d7c7ff");
        const violet = cssColor("--violet", "#8d82ff");

        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Névoa suave: áreas amplas e translúcidas, estáveis para não distrair.
        const fog1 = ctx.createRadialGradient(
          canvas.width * .27, canvas.height * .24, 10,
          canvas.width * .27, canvas.height * .24, canvas.width * .42
        );
        fog1.addColorStop(0, hexToRgba(magenta, .085));
        fog1.addColorStop(1, hexToRgba(magenta, 0));
        ctx.fillStyle = fog1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const fog2 = ctx.createRadialGradient(
          canvas.width * .76, canvas.height * .72, 8,
          canvas.width * .76, canvas.height * .72, canvas.width * .38
        );
        fog2.addColorStop(0, hexToRgba(cyan, .055));
        fog2.addColorStop(1, hexToRgba(cyan, 0));
        ctx.fillStyle = fog2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Grade adaptada ao tema atual.
        ctx.strokeStyle = hexToRgba(lilac, .065);
        ctx.lineWidth = 1;
        for (let i = 0; i <= grid; i++) {
          ctx.beginPath();
          ctx.moveTo(i * cell, 0);
          ctx.lineTo(i * cell, canvas.height);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(0, i * cell);
          ctx.lineTo(canvas.width, i * cell);
          ctx.stroke();
        }

        // Rastro de sonho atrás da cobra.
        dreamTrail.slice().reverse().forEach((t, i) => {
          const alpha = Math.max(0, t.life) * .12;
          ctx.fillStyle = hexToRgba(i % 2 ? cyan : magenta, alpha);
          ctx.beginPath();
          ctx.arc(
            t.x * cell + cell / 2,
            t.y * cell + cell / 2,
            Math.max(2, cell * (.18 + t.life * .16)),
            0,
            Math.PI * 2
          );
          ctx.fill();
        });

        // Comida com um brilho suave.
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = hexToRgba(magenta, .55);
        ctx.fillStyle = magenta;
        ctx.fillRect(food.x * cell + 4, food.y * cell + 4, cell - 8, cell - 8);
        ctx.restore();

        snake.forEach((s, i) => {
          ctx.save();
          ctx.fillStyle = i === 0 ? lilac : violet;
          ctx.shadowBlur = i === 0 ? 10 : 5;
          ctx.shadowColor = hexToRgba(i === 0 ? cyan : magenta, i === 0 ? .36 : .18);
          ctx.fillRect(s.x * cell + 2, s.y * cell + 2, cell - 4, cell - 4);
          ctx.restore();

          if (i === 0) {
            ctx.fillStyle = bg;
            const eyeY = s.y * cell + 7;
            ctx.fillRect(s.x * cell + 6, eyeY, 3, 3);
            ctx.fillRect(s.x * cell + cell - 9, eyeY, 3, 3);
          }
        });

        if (!running) {
          ctx.fillStyle = cssColor("--lilac", "#d7c7ff");
          ctx.font = "bold 18px Courier New";
          ctx.textAlign = "center";
          ctx.fillText("SNAKE.EXE", canvas.width / 2, canvas.height / 2);
        }

        if (paused && running) {
          ctx.fillStyle = "rgba(9,7,13,.72)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = cssColor("--cyan", "#a8f0ed");
          ctx.font = "bold 22px Courier New";
          ctx.textAlign = "center";
          ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2);
        }
      }

      function setDirection(x, y) {
        if (x === -dir.x && y === -dir.y) return;
        nextDir = {x, y};
      }

      document.addEventListener("keydown", e => {
        const snakeWin = $("#win-snake");
        if (!snakeWin.classList.contains("open")) return;

        const key = e.key.toLowerCase();
        const controls = {
          arrowup: [0,-1], w: [0,-1],
          arrowdown: [0,1], s: [0,1],
          arrowleft: [-1,0], a: [-1,0],
          arrowright: [1,0], d: [1,0]
        };

        if (controls[key]) {
          e.preventDefault();
          setDirection(...controls[key]);
        } else if (e.code === "Space") {
          e.preventDefault();
          togglePause();
        }
      });

      function togglePause() {
        if (!running) return;
        paused = !paused;
        pauseBtn.textContent = paused ? "RESUME" : "PAUSE";
        draw();
      }

      startBtn.addEventListener("click", reset);
      pauseBtn.addEventListener("click", togglePause);
      draw();
    }


    function setupSpotifyResponsiveScale() {
      const bezel = document.querySelector("#win-music .spotify-bezel");
      const frame = document.getElementById("spotifyPlayer");
      if (!bezel || !frame) return;

      const BASE_W = 460;
      const BASE_H = 352;

      const resizeSpotify = () => {
        const rect = bezel.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        // "contain" mantém o player inteiro visível, deixando-o o maior possível
        // dentro do espaço disponível na janela atual.
        const scale = Math.min(rect.width / BASE_W, rect.height / BASE_H);

        frame.style.transform =
          `translate(-50%, -50%) scale(${Math.max(.35, scale)})`;
      };

      const observer = new ResizeObserver(resizeSpotify);
      observer.observe(bezel);

      window.addEventListener("resize", resizeSpotify);
      setTimeout(resizeSpotify, 0);
    }

    restoreTheme();


    function setupPsychedelicDesktop() {
      const desktop = $("#desktop");
      if (!desktop) return;

      desktop.addEventListener("click", e => {
        // Não reage aos controles ou ícones da interface; apenas ao papel de parede.
        if (e.target.closest(".desktop-icon, .occult-mark")) return;

        const rect = desktop.getBoundingClientRect();
        const ripple = document.createElement("i");
        ripple.className = "psy-ripple";
        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";
        ripple.style.setProperty("--psy-seed", String(Math.random()));
        desktop.appendChild(ripple);

        ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
      });
    }



    function setupDreamCursor() {
      // O cursor nativo é usado intencionalmente na versão estável.
      return;
    }

    renderData();
    setupSoundFX();
    makeStars();
    setupWindowControls();
    setupOpeners();
    setupStart();
    setupClock();
    setupTerminal();
    setupGothicEasterEggs();
    setupGhostFile();
    setupSnake();
    setupDreamCursor();
    setupPsychedelicDesktop();
    setupSpotifyResponsiveScale();
    setupSpotifyPrivacyGate();

    // Abre uma janela inicial discreta.
    setTimeout(() => openWindow("about"), 450);
