---
layout: page
title: Projects
permalink: /projects/
nav: false
nav_order: 2
display_categories: [Human Intention Inference, BeyondDeskVR, Multi-Modal Interaction, Data-Driven Interface]
horizontal: true
---


<style>
  .project-hero {
    margin: 1.5rem auto 2.5rem;
    padding: 2.25rem;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.12), rgba(32, 201, 151, 0.16));
    text-align: center;
  }

  .project-hero p {
    max-width: 820px;
    margin: 0 auto;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .project-overview-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin: 2rem 0 3rem;
  }

  .project-overview-card {
    padding: 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-card-bg-color);
    min-height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-overview-icon {
    font-size: 1.8rem;
    color: var(--global-theme-color);
    margin-bottom: 0.75rem;
  }

  .project-overview-card h3 {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }

  .project-overview-card p {
    font-size: 0.92rem;
    line-height: 1.55;
    margin-bottom: 1rem;
  }

  .project-overview-card a {
    align-self: flex-start;
  }

  .project-detail {
    scroll-margin-top: 90px;
    padding: 2.5rem 0;
  }

  .project-divider {
    border: 0;
    border-top: 3px double var(--global-divider-color);
    margin: 1.5rem 0;
  }

  .project-detail-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.2fr);
    gap: 2rem;
    align-items: center;
  }

  .project-detail-image img {
    width: 100%;
    border-radius: 8px;
  }

  .project-label {
    color: var(--global-theme-color);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    margin-bottom: 0.35rem;
  }

  .project-detail h2 {
    margin-bottom: 1rem;
  }

  .project-detail h3 {
    margin-top: 1.25rem;
    font-size: 1.1rem;
  }

  @media (max-width: 992px) {
    .project-overview-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .project-detail-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 576px) {
    .project-hero {
      padding: 1.5rem;
    }

    .project-overview-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="project-hero">
  <p>
    My work sits at the intersection of human factors, human-computer interaction,
    intelligent systems, mixed reality, and engineering design. Across different
    projects, I explore how people perceive, decide, collaborate, and interact with
    complex technologies, with the broader goal of building adaptive systems that
    better understand human needs, intentions, and contexts.
  </p>
</div>

## Project Overview

<div class="project-overview-grid">

  <div class="project-overview-card">
    <div>
      <div class="project-overview-icon"><i class="fa-solid fa-brain"></i></div>
      <h3>Hierarchical Intention Recognition</h3>
      <p>A framework for inferring multi-level human intentions in complex human-machine tasks.</p>
    </div>
    <a class="btn btn-sm btn-primary" href="#hierarchical-intention-recognition">View project</a>
  </div>

  <div class="project-overview-card">
    <div>
      <div class="project-overview-icon"><i class="fa-solid fa-vr-cardboard"></i></div>
      <h3>BeyondDeskVR</h3>
      <p>A mixed reality workspace concept for expanding interaction beyond the physical desk.</p>
    </div>
    <a class="btn btn-sm btn-primary" href="#beyonddeskvr">View project</a>
  </div>

  <div class="project-overview-card">
    <div>
      <div class="project-overview-icon"><i class="fa-solid fa-eye"></i></div>
      <h3>Attention-Aware Interface</h3>
      <p>A speculative interface that adapts visual information density based on user attention.</p>
    </div>
    <a class="btn btn-sm btn-primary" href="#attention-aware-interface">View project</a>
  </div>

  <div class="project-overview-card">
    <div>
      <div class="project-overview-icon"><i class="fa-solid fa-hand-pointer"></i></div>
      <h3>Gesture Interaction Toolkit</h3>
      <p>A lightweight design toolkit for prototyping gesture-based interactions in immersive systems.</p>
    </div>
    <a class="btn btn-sm btn-primary" href="#gesture-interaction-toolkit">View project</a>
  </div>

  <div class="project-overview-card">
    <div>
      <div class="project-overview-icon"><i class="fa-solid fa-chart-line"></i></div>
      <h3>Cognitive Load Dashboard</h3>
      <p>A dashboard concept for monitoring workload patterns during complex decision-making tasks.</p>
    </div>
    <a class="btn btn-sm btn-primary" href="#cognitive-load-dashboard">View project</a>
  </div>

  <div class="project-overview-card">
    <div>
      <div class="project-overview-icon"><i class="fa-solid fa-robot"></i></div>
      <h3>Adaptive Robot Partner</h3>
      <p>A conceptual human-robot collaboration study focused on timing, trust, and shared autonomy.</p>
    </div>
    <a class="btn btn-sm btn-primary" href="#adaptive-robot-partner">View project</a>
  </div>

  <div class="project-overview-card">
    <div>
      <div class="project-overview-icon"><i class="fa-solid fa-map-location-dot"></i></div>
      <h3>Spatial Decision Map</h3>
      <p>An exploratory visualization for representing user decisions across spatial task environments.</p>
    </div>
    <a class="btn btn-sm btn-primary" href="#spatial-decision-map">View project</a>
  </div>

  <div class="project-overview-card">
    <div>
      <div class="project-overview-icon"><i class="fa-solid fa-layer-group"></i></div>
      <h3>Multimodal Interaction Archive</h3>
      <p>A structured archive for organizing interaction data from gaze, gesture, speech, and behavior.</p>
    </div>
    <a class="btn btn-sm btn-primary" href="#multimodal-interaction-archive">View project</a>
  </div>

</div>

<hr class="project-divider">

<section class="project-detail" id="hierarchical-intention-recognition">
  <div class="project-detail-grid">
    <div class="project-detail-image">
      {% include figure.liquid loading="eager" path="assets/img/project_preview/Hierarchical Intention Recognition.png" title="Hierarchical Intention Recognition" class="img-fluid rounded z-depth-1" %}
    </div>
    <div>
      <div class="project-label">Human Intention Inference</div>
      <h2>Hierarchical Intention Recognition</h2>
      <h3>Project Content</h3>
      <p>
        This project explores how human intentions can be inferred across multiple levels
        during complex human-machine interaction. It combines task analysis, behavioral
        data, machine state information, and environmental context to model how low-level
        interaction behaviors relate to high-level task goals.
      </p>
      <h3>Outcome</h3>
      <p>
        The project produced a hierarchical recognition framework and demonstrated how
        deep learning and probabilistic modeling can be combined to infer both interaction
        intentions and task intentions in dynamic scenarios.
      </p>
    </div>
  </div>
</section>

<hr class="project-divider">

<section class="project-detail" id="beyonddeskvr">
  <div class="project-detail-grid">
    <div class="project-detail-image">
      {% include figure.liquid loading="eager" path="assets/img/project_preview/BeyondDeskVR.png" title="BeyondDeskVR" class="img-fluid rounded z-depth-1" %}
    </div>
    <div>
      <div class="project-label">Mixed Reality Workspace</div>
      <h2>BeyondDeskVR</h2>
      <h3>Project Content</h3>
      <p>
        BeyondDeskVR investigates how virtual and physical workspaces can be blended to
        support richer spatial interaction. The project imagines a workspace where screens,
        documents, tools, and task objects can extend beyond the limits of a traditional desk.
      </p>
      <h3>Outcome</h3>
      <p>
        The project resulted in a mixed reality interaction prototype and design insights
        about spatial organization, embodied interaction, and user control in immersive
        productivity environments.
      </p>
    </div>
  </div>
</section>

<hr class="project-divider">

<section class="project-detail" id="attention-aware-interface">
  <div class="project-detail-grid">
    <div class="project-detail-image">
      {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="Attention-Aware Interface" class="img-fluid rounded z-depth-1" %}
    </div>
    <div>
      <div class="project-label">Adaptive Interface</div>
      <h2>Attention-Aware Interface</h2>
      <h3>Project Content</h3>
      <p>
        This fictional project explores an interface that senses where users allocate
        attention and dynamically adjusts visual density, notification timing, and information
        grouping to reduce distraction during focused work.
      </p>
      <h3>Outcome</h3>
      <p>
        The outcome is a conceptual interaction model showing how attention-sensitive systems
        could balance helpful adaptation with user agency and transparency.
      </p>
    </div>
  </div>
</section>

<hr class="project-divider">

<section class="project-detail" id="gesture-interaction-toolkit">
  <div class="project-detail-grid">
    <div class="project-detail-image">
      {% include figure.liquid loading="eager" path="assets/img/4.jpg" title="Gesture Interaction Toolkit" class="img-fluid rounded z-depth-1" %}
    </div>
    <div>
      <div class="project-label">Interaction Design</div>
      <h2>Gesture Interaction Toolkit</h2>
      <h3>Project Content</h3>
      <p>
        This fictional toolkit provides reusable gesture patterns for immersive applications,
        including object selection, spatial navigation, mode switching, and command confirmation.
      </p>
      <h3>Outcome</h3>
      <p>
        The project proposes a compact gesture vocabulary and evaluation checklist for
        designing interactions that are discoverable, comfortable, and resistant to accidental input.
      </p>
    </div>
  </div>
</section>

<hr class="project-divider">

<section class="project-detail" id="cognitive-load-dashboard">
  <div class="project-detail-grid">
    <div class="project-detail-image">
      {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="Cognitive Load Dashboard" class="img-fluid rounded z-depth-1" %}
    </div>
    <div>
      <div class="project-label">Human Factors Analytics</div>
      <h2>Cognitive Load Dashboard</h2>
      <h3>Project Content</h3>
      <p>
        This fictional dashboard visualizes workload indicators during time-sensitive decision
        tasks. It combines task events, response timing, subjective ratings, and physiological
        signals into a compact monitoring interface.
      </p>
      <h3>Outcome</h3>
      <p>
        The outcome is a dashboard layout that helps researchers compare workload trends
        across participants, task phases, and interface conditions.
      </p>
    </div>
  </div>
</section>

<hr class="project-divider">

<section class="project-detail" id="adaptive-robot-partner">
  <div class="project-detail-grid">
    <div class="project-detail-image">
      {% include figure.liquid loading="eager" path="assets/img/6.jpg" title="Adaptive Robot Partner" class="img-fluid rounded z-depth-1" %}
    </div>
    <div>
      <div class="project-label">Human-Robot Collaboration</div>
      <h2>Adaptive Robot Partner</h2>
      <h3>Project Content</h3>
      <p>
        This fictional study examines how a robot teammate might adapt its assistance timing
        based on human uncertainty, task progress, and interaction history in a shared workspace.
      </p>
      <h3>Outcome</h3>
      <p>
        The project defines a set of adaptive collaboration behaviors and design principles
        for supporting trust calibration in shared-control systems.
      </p>
    </div>
  </div>
</section>

<hr class="project-divider">

<section class="project-detail" id="spatial-decision-map">
  <div class="project-detail-grid">
    <div class="project-detail-image">
      {% include figure.liquid loading="eager" path="assets/img/7.jpg" title="Spatial Decision Map" class="img-fluid rounded z-depth-1" %}
    </div>
    <div>
      <div class="project-label">Spatial Visualization</div>
      <h2>Spatial Decision Map</h2>
      <h3>Project Content</h3>
      <p>
        This fictional visualization maps user decisions onto spatial task environments,
        helping researchers observe where hesitation, correction, or repeated actions occur.
      </p>
      <h3>Outcome</h3>
      <p>
        The outcome is an exploratory visualization format for reviewing spatial behavior,
        identifying task bottlenecks, and comparing interaction strategies.
      </p>
    </div>
  </div>
</section>

<hr class="project-divider">

<section class="project-detail" id="multimodal-interaction-archive">
  <div class="project-detail-grid">
    <div class="project-detail-image">
      {% include figure.liquid loading="eager" path="assets/img/8.jpg" title="Multimodal Interaction Archive" class="img-fluid rounded z-depth-1" %}
    </div>
    <div>
      <div class="project-label">Multimodal Data System</div>
      <h2>Multimodal Interaction Archive</h2>
      <h3>Project Content</h3>
      <p>
        This fictional archive organizes multimodal interaction data, including gaze,
        gestures, speech, system logs, and task annotations, into a consistent structure
        for later analysis.
      </p>
      <h3>Outcome</h3>
      <p>
        The project results in a data organization framework that supports cleaner analysis,
        easier collaboration, and more transparent documentation of interaction studies.
      </p>
    </div>
  </div>
</section>