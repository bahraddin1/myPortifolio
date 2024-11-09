const manuBtn = document.querySelector('.manu-btn'),
      manu = document.querySelector('.manu');

manuBtn.addEventListener('click',()=>{
    manu.classList.toggle('active')
    manuBtn.classList.toggle('toggle')
}) ;

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((link)=>{
    link.addEventListener('click',()=>{
        if(manuBtn.classList.contains('toggle') ||manu.classList.contains('active') ){
            manu.classList.toggle('active')
            manuBtn.classList.toggle('toggle')
        }
    })
})


// change text
let words = document.querySelectorAll('.word');
words.forEach(word =>{
    let letters = word.textContent.split('');
        word.textContent = '';
    letters.forEach(letter =>{
        let span = document.createElement('span');
        span.textContent=letter;
        span.className='letter';
        word.append(span)
    });

});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
//words[currentWordIndex].style.opacity ='1';

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i)=>{
        setTimeout(()=>{
            letter.className = 'letter out'
        },i*80)
    });

    nextWord.style.opacity = '1';

    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = 'letter behind';

        setTimeout(() => {
            letter.className = 'letter in'
        },340+ i*80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex +1;
};

changeText();
setInterval(changeText, 3000)

// resize nav-bar

const navBar = document.querySelector('.nav-bar');
console.log(navBar)
window.onscroll = ()=>{
    this.scrollY > 20 ? navBar.classList.add('sticky') : navBar.classList.remove('sticky')
}

// skill progress

const aboutSkill = document.querySelector('.about-skill'),
        skill_bar = document.querySelectorAll('.progress-line');
window.addEventListener('scroll', ()=>{
    skillEffect();
    
})

function checkScroll(el){
    let rect = el.getBoundingClientRect()

    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
    
}

function skillEffect(){
    if(!checkScroll(aboutSkill)) return;
    skill_bar.forEach((skill)=>{
        skill.style.width = skill.dataset.progress;
    })
}


  /*===== faq Section  =====*/

  const faqQuestions = document.querySelectorAll('.question');

  faqQuestions.forEach((question)=>{
    question.addEventListener('click',()=>{
        const faqItem = question.parentElement;
                faqItem.classList.toggle('faq-open');

        document.querySelectorAll('.faq-item-inner').forEach((otherItem)=>{
            if(otherItem !== faqItem) {
                otherItem.classList.remove('faq-open')
            }
        })
       
    })
  })

// scroll active
  /*===== Scroll Section Active Link =====*/

  const Section=document.querySelectorAll('section[id]')
  function scrollActive()
  {
      const scrollY = window.pageYOffset
      Section.forEach(current => {
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 50;
          sectionId = current.getAttribute('id')
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
          {
              document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
          }
          else
          {
            document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
          }
      })
  }
  window.addEventListener('scroll', scrollActive)

// scroll animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-items')
        }else {
            entry.target.classList.remove('show-items')
        }
    })
})


const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll('.scroll-Bottom');
scrollBottom.forEach((el)=>observer.observe(el));

const scrollBottom1 = document.querySelectorAll('.scroll-Bottom1');
scrollBottom1.forEach((el)=>observer.observe(el));

const scrollBottom2 = document.querySelectorAll('.scroll-Bottom2');
scrollBottom2.forEach((el)=>observer.observe(el));

const scrollBottom3 = document.querySelectorAll('.scroll-Bottom3');
scrollBottom3.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll('.scroll-Top');
scrollTop.forEach((el)=>observer.observe(el));

const scrollRight = document.querySelectorAll('.scroll-Righ');
scrollRight.forEach((el)=>observer.observe(el));

