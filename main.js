/* https://css-tricks.com/random-numbers-css/ */

/* getting all 'i' elements and assigning their animation times 
   to a more random number */
const allLogos = document.getElementsByTagName('i')

for (logo of allLogos)
{
    const randomTime = Math.random()
    logo.style.setProperty('--rotation-animation-time', 15 + randomTime + 's')
}

