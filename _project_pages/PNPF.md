---
title: Reactive Motion Generation via <br> Phase-varying Neural Potential Functions
layout: project_page
permalink: /PNPF/
video: https://www.youtube.com/embed/9d-7r-kdCsE
---
<div id="primarycontent">
<center>
<h2>{{page.title}}</h2>   
<br> 
	<a href="/">Ahmet E Tekden<sup>1</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://dkanou.github.io/">Dimitrios Kanoulas<sup>2</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://people.epfl.ch/aude.billard">Aude Billard<sup>3</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://www.dryaseminbekiroglu.com/">Yasemin Bekiroglu<sup>1,2</sup></a><br><br>
	<sup>1</sup>Chalmers University of Technology  <br>
	<sup>2</sup>University College London <br>
  <sup>3</sup>Ecole Polytechnique Federale de Lausanne

</center>
<br>

<br>
<h2>Abstract</h2>
<p>
Dynamical systems (DS) methods for Learning-from-Demonstration (LfD) provide stable, continuous policies from few demonstrations. First-order dynamical systems (DS) are effective for many point-to-point and periodic tasks, as long as each position maps to a unique velocity. For tasks with intersections (e.g., drawing an “8”), extensions such as second-order dynamics or phase variables are often used. Second-order models incorporate velocity, but this makes them sensitive to disturbances near intersections because they require accurate velocity observations. They can also become ambiguous when similar motion segments produce nearly identical position–velocity pairs that should lead to different onward motions. In contrast, phase-based methods rely on open-loop time or phase variables, which limit their ability to recover after perturbations. We introduce Phase-varying Neural Potential Functions (PNPF), an LfD framework that conditions a potential function on a closed-loop phase variable, which is estimated directly from state progression, rather than on open-loop temporal inputs. This phase variable allows the system to handle state revisits, while the learned potential function generates local vector fields for reactive and stable control. PNPF generalizes effectively across point-to-point, periodic, and full 6D motion tasks, outperforms existing baselines on trajectories with intersections, and demonstrates robust performance in real-time robotic manipulation under external disturbances.
</p>
<hr>

<h2>Code</h2>
Coming Soon
<hr>

<h2>Supplementary Video</h2>

<div class="video">
    <iframe width="560" height="315" src="{{page.video}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br/><hr>
