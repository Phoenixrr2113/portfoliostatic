/_ http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
_/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/_ HTML5 display-role reset for older browsers _/
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
display: block;
}
body {
line-height: 1;
}
ol,
ul {
list-style: none;
}
blockquote,
q {
quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}

/_ Set every element's box-sizing to border-box _/

- {
  box-sizing: border-box;
  }

html,
body {
height: 100%;
font-family: 'Titillium Web', sans-serif;
}

h1,
h2,
h3,
h4,
h5 {
font-family: 'Bangers';
letter-spacing: 1px;
margin-bottom: 15px;
}

- {
  box-sizing: border-box;
  }

/_ ----------------- heading _/

.intro-section {
color: white;
background-color: #252934;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
}
.intro-section .heading {
margin: auto;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
}
.intro-section .heading h1 {
letter-spacing: 3px;
line-height: 120%;
text-align: center;
font-size: 70px;
}
.intro-section .heading h1 span {
color: #e3196d;
}
.intro-section .heading .button {
margin-top: 10px;
border: 1px solid white;
}
.intro-section .heading .button p {
font-size: 20px;
padding: 20px;
}

/_ ------------Navbar _/

.navigation {
background-color: black;
border-bottom: 4px solid #03c2c9;
}
.navigation .nav-content .selected {
color: #e3196d;
}

.navigation .nav-content {
width: 50%;
display: flex;
}
.navigation .nav-content a {
margin: 3% 0;
padding-left: 5%;
text-decoration: none;
color: white;
}

/_ ---------Main content _/

.container {
width: 1100px;
margin: 0 auto;
display: flex;
flex-direction: column;
}

/_ --------------- About _/

.about-section {
margin-top: 5%;
width: 100%;
}

.about-section .header {
display: flex;
flex-direction: column;
align-items: center;
}

.about-section .header h1 {
font-size: 60px;
margin: 0;
}
.about-section .header hr {
background-color: black;
width: 10%;
height: 10px;
}

.about-section .about-content .top-content {
margin-top: 7%;
display: flex;
}
.about-section .about-content .top-content .card {
width: 25%;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 15px;
}

.about-section .about-content .top-content .card .img {
background: #07bac2;
width: 80px;
height: 80px;
position: relative;
text-align: center;
transform: rotate(20deg);
}

.about-section .about-content .top-content .card .img:before {
content: '';
position: absolute;
top: 0;
left: 0;
height: 80px;
width: 80px;
background: #07bac2;
transform: rotate(135deg);
}

.about-section .about-content .top-content .card h2 {
margin-top: 40px;
font-size: 20px;
}
.about-section .about-content .top-content .card p {
text-align: center;
line-height: 125%;
letter-spacing: 0.7px;
}

.about-section .about-content .bio {
padding: 0 15px;
margin-top: 7%;
display: flex;
justify-content: space-between;
}
.about-section .about-content .bio .profile {
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
}
.about-section .about-content .bio .profile .profile-content p {
text-align: center;
line-height: 125%;
letter-spacing: 0.7px;
}

.about-section .about-content .bio .skills-content {
margin-left: 5%;
width: 60%;
display: flex;
flex-direction: column;
}
.about-section .about-content .bio .skills-content .skill-container {
display: flex;
}
.about-section .about-content .bio .skills-content .skill-container .tag {
background-color: #08bac2;
width: 100px;
padding: 10px;
color: white;
position: absolute;
z-index: 1;
}

.about-section .about-content .bio .skills-content .skills {
text-align: right; /_ Right-align text _/
padding: 10px; /_ Add some padding _/
color: white; /_ White text color _/
}

.about-section .about-content .bio .skills-content .bar {
width: 100%;
margin-top: 10px;
background-color: #ebebeb;
}
.about-section .about-content .bio .skills-content .bar .css {
width: 80%;
background-color: #01979d;
}

.about-section .about-content .bio .skills-content .bar .html {
width: 90%;
background-color: #01979d;
} /_ Green _/

.about-section .about-content .bio .skills-content .bar .js {
width: 85%;
background-color: #01979d;
} /_ Red _/

.about-section .about-content .bio .skills-content .bar .react {
width: 75%;
background-color: #01979d;
}
.about-section .about-content .bio .skills-content .bar .mongo {
width: 60%;
background-color: #01979d;
}

/_ -------------- Projects section _/

.projects-section {
margin-top: 5%;
width: 100%;
border: 2px solid green;
}

.projects-section .header {
display: flex;
flex-direction: column;
align-items: center;
}

.projects-section .header h1 {
font-size: 60px;
margin: 0;
}
.projects-section .header hr {
background-color: black;
width: 10%;
height: 10px;
}

/_ --------- Contact section _/

.contact-section {
background-color: #21242e;
margin-top: 5%;
width: 100%;
color: white;
}

.contact-section .header {
padding-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
color: white;
}

.contact-section .header h1 {
font-size: 60px;
margin: 0;
}
.contact-section .header hr {
width: 10%;
height: 10px;
background-color: white;
}

.contact-section .contact-content {
margin-top: 60px;
display: flex;
flex-direction: column;
align-items: center;
}
.contact-section .contact-content p {
color: #07bac2;
font-size: 20px;
letter-spacing: 0.7px;
}
.contact-section .contact-content form {
margin-top: 30px;
width: 30%;
display: flex;
flex-direction: column;
}

.contact-section .contact-content form input,
textarea {
font-size: 18px;
margin-top: 5px;
border: none;
padding: 8px;
color: #676768;
background-color: #1b2027;
}

.contact-section .contact-content form input[type='submit'] {
margin-top: 5px;
width: 20%;
background-color: #1b2027;
color: white;
padding: 12px 20px;
border: 2px solid white;
cursor: pointer;
align-self: flex-end;
}

<!-- less -->

@color_1: white;
@color_2: #e3196d;
@color_3: #07bac2;
@color_4: #676768;
@background_color_1: #252934;
@background_color_2: black;
@background_color_3: #08bac2;
@background_color_4: #ebebeb;
@background_color_5: #01979d;
@background_color_6: #21242e;
@background_color_7: white;
@background_color_8: #1b2027;

html {
height: 100%;
}
body {
height: 100%;
}
.intro-section {
color: @color*1;
background-color: @background_color_1;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
.heading {
margin: auto;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
h1 {
letter-spacing: 3px;
line-height: 120%;
text-align: center;
font-size: 70px;
span {
color: @color_2;
}
}
.button {
margin-top: 10px;
border: 1px solid white;
p {
font-size: 20px;
padding: 20px;
}
}
}
}
/* {
------------Navbar {
_/ {
.navigation {
background-color: @background_color_2;
border-bottom: 4px solid #03c2c9;
}
}
}
---------Main {
content {
_/ {
.container {
width: 1100px;
margin: 0 auto;
display: flex;
flex-direction: column;
}
}
}
}
--------------- {
About {
_/ {
.about-section {
margin-top: 5%;
width: 100%;
}
}
}
}
Green {
_/ {
.about-section {
.about-content {
.bio {
.skills-content {
.bar {
.js {
width: 85%;
background-color: @background*color_5;
}
}
}
}
}
}
}
}
Red {
*/ {
.about-section {
.about-content {
.bio {
.skills-content {
.bar {
.react {
width: 75%;
background-color: @background*color_5;
}
}
}
}
}
}
}
}
-------------- {
Projects {
section {
*/ {
.projects-section {
margin-top: 5%;
width: 100%;
border: 2px solid green;
}
}
}
}
}
--------- {
Contact {
section {
_/ {
.contact-section {
background-color: @background_color_6;
margin-top: 5%;
width: 100%;
color: @color_1;
}
}
}
}
}
}
.navigation {
.nav-content {
.selected {
color: @color_2;
}
width: 50%;
display: flex;
a {
margin: 3% 0;
padding-left: 5%;
text-decoration: none;
color: @color_1;
}
}
}
.about-section {
.header {
display: flex;
flex-direction: column;
align-items: center;
h1 {
font-size: 60px;
margin: 0;
}
hr {
background-color: @background_color_2;
width: 10%;
height: 10px;
}
}
.about-content {
.top-content {
margin-top: 7%;
display: flex;
.card {
width: 25%;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 15px;
.img {
background: #07bac2;
width: 80px;
height: 80px;
position: relative;
text-align: center;
transform: rotate(20deg);
&:before {
content: '';
position: absolute;
top: 0;
left: 0;
height: 80px;
width: 80px;
background: #07bac2;
transform: rotate(135deg);
}
}
h2 {
margin-top: 40px;
font-size: 20px;
}
p {
text-align: center;
line-height: 125%;
letter-spacing: 0.7px;
}
}
}
.bio {
padding: 0 15px;
margin-top: 7%;
display: flex;
justify-content: space-between;
.profile {
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
.profile-content {
p {
text-align: center;
line-height: 125%;
letter-spacing: 0.7px;
}
}
}
.skills-content {
margin-left: 5%;
width: 60%;
display: flex;
flex-direction: column;
.skill-container {
display: flex;
.tag {
background-color: @background_color_3;
width: 100px;
padding: 10px;
color: @color_1;
position: absolute;
z-index: 1;
}
}
.skills {
text-align: right;
/_ right-align text _/ padding: 10px;
/_ add some padding \_/ color: white;
}
.bar {
width: 100%;
margin-top: 10px;
background-color: @background_color_4;
.css {
width: 80%;
background-color: @background_color_5;
}
.html {
width: 90%;
background-color: @background_color_5;
}
.mongo {
width: 60%;
background-color: @background_color_5;
}
}
}
}
}
}
.projects-section {
.header {
display: flex;
flex-direction: column;
align-items: center;
h1 {
font-size: 60px;
margin: 0;
}
hr {
background-color: @background_color_2;
width: 10%;
height: 10px;
}
}
}
.contact-section {
.header {
padding-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
color: @color_1;
h1 {
font-size: 60px;
margin: 0;
}
hr {
width: 10%;
height: 10px;
background-color: @background_color_7;
}
}
.contact-content {
margin-top: 60px;
display: flex;
flex-direction: column;
align-items: center;
p {
color: @color_3;
font-size: 20px;
letter-spacing: 0.7px;
}
form {
margin-top: 30px;
width: 30%;
display: flex;
flex-direction: column;
input {
font-size: 18px;
margin-top: 5px;
border: none;
padding: 8px;
color: @color_4;
background-color: @background_color_8;
}
input[type='submit'] {
margin-top: 5px;
width: 20%;
background-color: @background_color_8;
color: @color_1;
padding: 12px 20px;
border: 2px solid white;
cursor: pointer;
align-self: flex-end;
}
}
}
}
textarea {
font-size: 18px;
margin-top: 5px;
border: none;
padding: 8px;
color: @color_4;
background-color: @background_color_8;
}
#wrap {
.col {
float: left;
a {
text-decoration: none;
}
}
}
