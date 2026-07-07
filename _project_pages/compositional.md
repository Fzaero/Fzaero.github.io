---
title: Compositional Motion Generation from Demonstration <br> with Object-Centric Neural Fields
layout: project_page
permalink: /compositional/
header_img: /assets/images/RAL2026C.png
video: https://www.youtube.com/embed/WEynM3ePR0s
---
<div id="primarycontent">
<center>
<h2>{{page.title}}</h2>   
<br> 
	<a href="/">Ahmet E Tekden<sup>1</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://www.dryaseminbekiroglu.com/">Yasemin Bekiroglu<sup>1,2</sup></a><br><br>
	<sup>1</sup>Chalmers University of Technology  <br>
	<sup>2</sup>University College London <br>
</center>
<br>

<img width="800px" style="margin: 0px 000px" id="header_img" src="{{page.header_img}}"/><br>
<br>
<h2>Abstract</h2>
<p>
Compositionality, by organizing complex behavior as combinations of simpler elements, enables robot learning that is scalable and data efficient. Leveraging this principle, we propose a generative learning-from-demonstration framework that enables compositional modeling of robotic behavior by connecting perception and motion through shared object-level representations. We render scenes from object-centric neural representations that integrate canonical neural fields with latent-conditioned deformations, capturing positional and geometric variations in a smooth, consistent, and interpretable way. For motion generation, a temporal mixture-of-experts (MoE) employs a gating mechanism to combine object-conditioned movement primitives over time, producing complete trajectories. This spatial–temporal compositionality maintains the data efficiency of movement primitives while grounding motion in visual structure, enabling systematic generalization across diverse scene configurations. In simulation, long-horizon manipulation tasks are successfully completed using the proposed model, which requires significantly less training data than other image-based baselines. Real-world experiments further demonstrate the method’s robustness to noise, its ability to generalize at the category level through language-based segmentation models, and its capacity to operate directly on 3D scene representations.
</p>
<hr>

<h2>Supplementary Video</h2>

<div class="video">
    <iframe width="560" height="315" src="{{page.video}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br/><hr>

<h2>Code</h2>

<p>Coming soon.</p>
