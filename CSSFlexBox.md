### Flex box is intelligently figuring out where everything needs to go without breaking your layout.
1. **display: flex** -> makes the content/item flexible -> flex container contains flex item.
2. **flex-direction: row** -> default is row with main axis left to right, you can change to column with main axis top to bottom, row-reverse with main axis right to left, column-reverse with main axis bottom to top.
3. **flex-wrap: nowrap** -> works on flex container. Default is nowrap. 假如给each flex item一个width很长，那么nowrap的话browser会平均分配window的width，不会用给定的长width。但是写flex-wrap: wrap的话就会用each item的宽度，然后把长度适应。如果没有width的话就没有必要wrap。 同理flex-direction是column方向时，如果height没有限制就没有wrap的必要。可以reverse
4. **border** and **padding** are part of the box, but margin is not.
5. (on flex item) **flex: 1;** will display all flex items evenly.
6. **order:0;** default is 0, any number bigger than 0 will be put at the end of layout. Can be used on header, footer... can also use negative numbers.
7. item alignment in flex box: **justify-content align items on main axis** -> takes the extra white space and divide them up
**justify-content: flex-start;** default. flex-end center space-between space-around
8. item alignment in flex box: **align-items align items on cross axis** -> needs a height to work
**align-items: stretch;** default. flex-start flex-end center(item会缩小到中间vertically) baseline (looks at the content of your items and make sure the bottom of every single letter/number is aligned properly)
9. **align-content** -> takes the cross axis and splits it up. so only works when there are multiple lines of code. default is stretch. so paramters like justify-content. stretch, center, flec-start, flex-end, space-between, space-around.
10. **align-self: stretch; flex-start, flex-end, center, baseline...** overwrite the container flex alignment. case by case, goes to individual item.
11. flex property. flex: 1; divide extra space evenly. flex: 2; takes twice as much of the extra room as flex: 1 items. flex: 3 takes three times amount of extra spaces as flex: 1 items. 注意是take额外空间的多少，不是item2是1的多少倍。是当有extra room存在的时候，flex：2的会抢extram room 2倍于flex：1的item。
12. **flex: 1;** is a short hand to set both **flex-grow** and **flex-shrink** as 1, and no default for **flex-basis**. So flex: 1; actually includes 3 things.
**flex-grow** is when you have extra space, how much space you shoud take, and default of everything the flex-grow is 0, which means when there is extra room, don't do anything.
**flex-shrink** is when the space is smaller than you set, how should items slim themself down. default is 1. And a number means "how much room should I give up in proportion to the other one. When there's no enough room, I'm gonna shrink myself # times more than the others"
So the default flex box, flex-grow and flex-shrink are both 1.
**flex-basis** is the base of each item. Eg. box1 has flex-basis 400px, box2 has flex-basis 400px. When the whole space is 800px, two items take 400 each. 
13. flex-grow only works on the row they are at. They don't effect other rows. If the flex-direction is column however, flex-grow will only effect the column item is at. flex-grow:0; or flex:0, 1, .. means when you have extra space, do nothing with it because you set flex-grow 0.
14. **gulp-autoprefixer** helps clean css code and automatically add prefix for css in different browser.
15. **@media all and (max-width:1000px){} @media all and (max-width: 500px){}** add some style to overwrite previous styles when width hits certain break points. Pay attention to the necessiry overwriting on specific item. Eg. even overwriting on a container in media, if you have specific style on some item within this container, that will still overwriting the style on container here.
16. when want to make some items flex items, we need to turn the parent into flex container, and remember the default flex direction is row. So it's recommended to have a wrap div on your website.
17. **order** : by default all flex items have an order 0. .wrapper > * is to select all direct decendents flex items of wraper.
18. Nesting flex box. A flex item can also be a flex container. When you want to have your items to stretch as well as vertically centered, you can use nested flex box.
19. **calc(33.33% - 20px);** when you have 20px margin on both sides of a item, it takes up space. so 3 items each have 33.33% is over the total 100%. You can use calc to subtract the extra margin.
20. when make a flex container **display:flex**, it will automatically stretch all its flex items and display evenly.
21. **flex: 1, 1, auto;** flex-basis is auto, when you want the certain content to take certain space and the left takes the rest.
22. **overflow-y: scroll;** makes certain content scrollable. but remember to open **-webkit-overflow-scrolling: touch;** makes it touchable scrolling on phone.

Reference: https://flexbox.io/
