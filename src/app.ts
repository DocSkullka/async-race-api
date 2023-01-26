import './style.scss'
import {win,garage} from './views'
import addingCars from './addCar'
import {startStop, race, reset} from './startStop'
import anim from './animation'
import { paggination, nextBackButton } from './paggination'

win()
garage()
startStop()
race()
reset()
anim()
alert('Здравствуйте, не могли бы вы проверить мою работу в конце кросс чека. Заранее спасибо  <3')

paggination()
nextBackButton()
addingCars()

// alert('Здравствуйте, не могли бы вы проверить мою работу в конце кросс чека. Заранее спасибо <3')