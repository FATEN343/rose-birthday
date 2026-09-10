document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SAFE CONFETTI
    ========================================== */

    function safeConfetti(options) {
        try {
            if (typeof confetti === "function") {
                confetti(options);
            }
        } catch (error) {
            console.log(error);
        }
    }


    /* ==========================================
       PARTICLES
    ========================================== */

    function createParticles() {

        const container = document.getElementById("particles");

        if (!container) return;

        for (let i = 0; i < 60; i++) {

            const particle = document.createElement("div");

            particle.classList.add("particle");

            const size = Math.random() * 6 + 2;

            particle.style.width = size + "px";
            particle.style.height = size + "px";

            particle.style.left =
                Math.random() * 100 + "vw";

            particle.style.animationDuration =
                Math.random() * 10 + 8 + "s";

            particle.style.animationDelay =
                Math.random() * 5 + "s";

            container.appendChild(particle);
        }
    }

    createParticles();


    /* ==========================================
       FLOATING CUTE EMOJIS
    ========================================== */

    function createHeart() {

        const container =
            document.getElementById("hearts-container");

        if (!container) return;

        const heart = document.createElement("div");

        heart.classList.add("heart");

        const emojis = [
            "💕",
            "💗",
            "🌷",
            "✨",
            "🎀",
            "🩷",
            "⭐"
        ];

        heart.innerHTML =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            Math.random() * 20 + 20 + "px";

        heart.style.animationDuration =
            Math.random() * 8 + 6 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 14000);
    }

    setInterval(createHeart, 700);


    /* ==========================================
       OPENING CONFETTI
    ========================================== */

    const openingDuration = 2500;
    const openingEnd = Date.now() + openingDuration;

    (function frame() {

        safeConfetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: {
                x: 0
            }
        });

        safeConfetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: {
                x: 1
            }
        });

        if (Date.now() < openingEnd) {
            requestAnimationFrame(frame);
        }

    })();


    /* ==========================================
       MUSIC PLAYER
    ========================================== */

    const music =
        document.getElementById("birthdayMusic");

    const musicBtn =
        document.getElementById("musicBtn");

    let musicPlaying = false;

    if (musicBtn && music) {

        musicBtn.addEventListener("click", () => {

            if (!musicPlaying) {

                music.play()
                    .then(() => {

                        musicBtn.innerHTML =
                            "⏸ Pause Music";

                        musicPlaying = true;

                    })
                    .catch(() => {

                        alert(
                            "Please make sure your music file is inside the music folder and named birthday.mp3"
                        );

                    });

            } else {

                music.pause();

                musicBtn.innerHTML =
                    "🎵 Play Music";

                musicPlaying = false;
            }

        });

    }


    /* ==========================================
       BIRTHDAY MESSAGE
    ========================================== */

    const birthdayMessage = `

Happy Birthday Rose 🌷🎂

Okayyy birthday girl, this little website is officially for you 😂🎀

We've only known each other for a little while,
but I'm really glad we crossed paths.

You're genuinely such a fun person to talk to,
and somehow you've already brought a lot of laughs
and good vibes into my life. 😂💕

I hope you have the sweetest birthday ever.

I hope this new year brings you lots of happiness,
success, exciting opportunities,
good people,
and plenty of reasons to smile. ✨

You deserve a day full of good vibes,
good food,
fun,
and absolutely ZERO unnecessary drama. 😭😂

Anywayyy, enjoy your day birthday girl 👑🌷

Happy Birthday, Rose! 🎂💕

Now go celebrate properly. 🎀

    `;


    const typingText =
        document.getElementById("typingText");

    let typingStarted = false;


    function startTypingEffect() {

        if (
            typingStarted ||
            !typingText
        ) {
            return;
        }

        typingStarted = true;

        let i = 0;

        function typeWriter() {

            if (i < birthdayMessage.length) {

                typingText.innerHTML +=
                    birthdayMessage.charAt(i);

                i++;

                setTimeout(
                    typeWriter,
                    25
                );

            }
        }

        typeWriter();
    }


    /* ==========================================
       START BUTTON
    ========================================== */

    const startBtn =
        document.getElementById("startBtn");

    const messageSection =
        document.getElementById("messageSection");

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            safeConfetti({
                particleCount: 180,
                spread: 100,
                origin: {
                    y: 0.6
                }
            });

            if (messageSection) {

                messageSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

            startTypingEffect();

        });

    }


    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        if (
                            entry.target.id ===
                            "messageSection"
                        ) {

                            startTypingEffect();

                        }

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    document
        .querySelectorAll(".hidden")
        .forEach((section) => {

            if (
                section.id !== "finalCelebration" &&
                section.id !== "giftMessage"
            ) {

                observer.observe(section);

            }

        });


    /* ==========================================
       COUNTDOWN
       ROSE'S BIRTHDAY — SEPTEMBER 11
    ========================================== */

    const targetDate =
    new Date(Date.now() + 60 * 1000);

    function updateCountdown() {

        const now = new Date();

        let difference =
            targetDate - now;

        if (difference < 0) {
            difference = 0;
        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (
                    difference %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (
                    difference %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (
                    difference %
                    (1000 * 60)
                ) /
                1000
            );


        const daysElement =
            document.getElementById("days");

        const hoursElement =
            document.getElementById("hours");

        const minutesElement =
            document.getElementById("minutes");

        const secondsElement =
            document.getElementById("seconds");


        if (daysElement)
            daysElement.textContent = days;

        if (hoursElement)
            hoursElement.textContent = hours;

        if (minutesElement)
            minutesElement.textContent = minutes;

        if (secondsElement)
            secondsElement.textContent = seconds;

    }


    setInterval(
        updateCountdown,
        1000
    );

    updateCountdown();


    /* ==========================================
       PHOTO LIGHTBOX
    ========================================== */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-item img"
        );

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImg =
        document.getElementById("lightboxImg");

    const closeLightbox =
        document.getElementById("closeLightbox");


    galleryImages.forEach((img) => {

        img.addEventListener("click", () => {

            if (!lightbox || !lightboxImg) return;

            lightbox.style.display = "flex";

            lightboxImg.src = img.src;

        });

    });


    if (closeLightbox) {

        closeLightbox.addEventListener(
            "click",
            () => {

                if (lightbox) {
                    lightbox.style.display = "none";
                }

            }
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            (event) => {

                if (event.target === lightbox) {

                    lightbox.style.display = "none";

                }

            }
        );

    }


    /* ==========================================
       BIRTHDAY GIRL QUIZ
    ========================================== */

    window.checkAnswer =
        function(isCorrect) {

            const result =
                document.getElementById(
                    "quizResult"
                );

            if (!result) return;


            if (isCorrect) {

                result.innerHTML =
                    "CORRECT 😭🎂 Obviously!! Birthday girl deserves the BEST day! 🎀💕";

                safeConfetti({
                    particleCount: 150,
                    spread: 100,
                    origin: {
                        y: 0.6
                    }
                });

            } else {

                result.innerHTML =
                    "WRONG 😭 Try again, Rose 😂";

            }

        };


    /* ==========================================
       ROSE CARDS
    ========================================== */

    window.showLoveMessage =
        function(message) {

            const box =
                document.getElementById(
                    "loveMessageBox"
                );

            if (!box) return;

            box.innerHTML = `
                <p>${message}</p>
            `;

            safeConfetti({
                particleCount: 50,
                spread: 70,
                origin: {
                    y: 0.6
                }
            });

        };


    /* ==========================================
       GIFT SURPRISE
    ========================================== */

    const giftBox =
        document.getElementById("giftBox");

    const giftMessage =
        document.getElementById("giftMessage");

    const finalCelebration =
        document.getElementById(
            "finalCelebration"
        );

    let giftOpened = false;


    if (giftBox) {

        giftBox.addEventListener(
            "click",
            () => {

                if (giftOpened) return;

                giftOpened = true;

                giftBox.style.display = "none";


                if (giftMessage) {

                    giftMessage.classList.remove(
                        "hidden"
                    );

                    giftMessage.classList.add(
                        "visible"
                    );

                }


                safeConfetti({
                    particleCount: 300,
                    spread: 160,
                    startVelocity: 45,
                    origin: {
                        y: 0.6
                    }
                });


                setTimeout(
                    () => {

                        if (finalCelebration) {

                            finalCelebration
                                .classList.remove(
                                    "hidden"
                                );

                            finalCelebration
                                .classList.add(
                                    "visible"
                                );


                            setInterval(
                                () => {

                                    safeConfetti({
                                        particleCount: 80,
                                        spread: 120,
                                        origin: {
                                            y: 0
                                        }
                                    });

                                },
                                2500
                            );

                        }

                    },
                    4000
                );

            }
        );

    }


    /* ==========================================
       OLD MEMORY FUNCTION
       Kept only so nothing breaks
    ========================================== */

    window.openMemoryGallery =
        function(images) {

            const modal =
                document.getElementById(
                    "memoryModal"
                );

            const gallery =
                document.getElementById(
                    "memoryGallery"
                );

            if (!modal || !gallery) {
                return;
            }

            gallery.innerHTML = "";

            images.forEach((imgPath) => {

                const img =
                    document.createElement("img");

                img.src = imgPath;

                img.alt = "Rose";

                gallery.appendChild(img);

            });

            modal.style.display = "flex";

        };


    const closeMemoryModal =
        document.getElementById(
            "closeMemoryModal"
        );


    if (closeMemoryModal) {

        closeMemoryModal.addEventListener(
            "click",
            () => {

                const modal =
                    document.getElementById(
                        "memoryModal"
                    );

                if (modal) {
                    modal.style.display = "none";
                }

            }
        );

    }


    const memoryModal =
        document.getElementById(
            "memoryModal"
        );


    if (memoryModal) {

        memoryModal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target.id ===
                    "memoryModal"
                ) {

                    memoryModal.style.display =
                        "none";

                }

            }
        );

    }

});