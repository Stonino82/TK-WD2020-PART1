# TK-WD2020-PART1
<h1> Notes on the development of this assessment </h1>

<p>For the development of this assessment I have used GULP task runner, a tool that I usually implement in Front-End projects and that allows me to automate certain tasks.</p>
<p>The gulp.js file is created by me, and in the package.json file it is possible to see the dependencies (although I don't usually use all of them, it depends on the project).</p>
</p>Some of these tasks are: 
    <ul>
        <li>compile files (sass and js)</li>
        <li>use prefixes (lately only in particular cases,  for example to adapt CSS Grid to IE)</li>
        <li>concatenate and minify in a single file</li>
        <li>control changes in source folders (/src) and transfer the changes to the distribution folder (/dist)</li>
        <li>optimize the images</li>
        <li>BrowserSync for live test and synchronization</li>
    </ul>
</p>

<p>Other concepts and tools used:</p>
<ul>
    <li>Semantic HTML5</li>
    <li>BEM</li>
    <li>SASS (Since I have started working with Gulp and BEM, I have moved away a little from the use of styles in SASS, anyway for the purpose of this project the styles are developed in SASS, using its main concepts: modules, nesting, variables and mixins.</li>
    <li>Responsive design (I have taken into account the 2 versions present in the design, mobile and desktop)</li>
    <li>SEO onpage (Meta description, image's alt, and so on .. although the project is very small and lacks content)</li>
    <li>For the slider I used Tiny Slider 2 (it was a bit difficult to find a JS ready-to-use slider that didn't use jquery and was full compatible with IE. For the purpose of this assessment maybe a CSS3 slider with some JS lines would have been better)</li>
</ul>