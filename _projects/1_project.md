---
layout: page
title: Hierarchical Intention Recognition
description: >
    Completed at Southeast University, 2023.10 - 2024.10.
    <br>

    <br>
    A hierarchical intention recognition framework suitable for complex tasks, aiming to infer human multilevel intentions from the lowest-level data such as human behaviour, machine and environmental information.
img: assets/img/project_preview/Hierarchical Intention Recognition.png
importance: 1
category: Human Intention Inference
---

<div class="alert alert-secondary" role="alert" style="background-color: var(--global-bg-color); color: var(--global-text-color);">
<strong>Abstract:</strong><br>
Intention recognition is the prerequisite and foundation for achieving intelligent human‒computer interaction (IHCI). In complex task scenarios, human intentions often exhibit hierarchical and context-related characteristics. In this paper, we propose a hierarchical intention recognition framework suitable for complex tasks, aiming to infer multilevel intentions from the lowest-level data such as human behaviour, machine and environmental information. The framework's usability was validated via a case study of helicopter and drone collaborative wildfire rescue missions. First, task analysis was employed to extract the intention structure among high-level task intentions, low-level interaction intentions, and feature data. Flight simulation data from 80 complete trials conducted by 16 participants were subsequently collected. Finally, reliable recognition of interaction intentions and task intentions was achieved via a one-dimensional convolutional neural network (1D-CNN) + bidirectional long short-term memory (Bi-LSTM) neural networks and a dynamic Bayesian network (DBN). The highest recognition accuracies for interaction intentions and task intentions were 94.57% and 97.33%, respectively. The methods and results of this study provide a novel perspective for human intention recognition in complex tasks and offer methodological guidance and support for intelligent adaptive interfaces and IHCI in complex task scenarios.
</div>

<br>

## Motivation

The overarching goal of intelligent human–computer interaction (IHCI) is to enable machines and computers to understand human intentions in a manner akin to human cognition and respond proactively to user needs. Achieving this capability necessitates accurate intention recognition as the foundational step toward intelligent interaction. 

In real-world contexts, humans naturally convey intentions through natural and multimodal behaviors—such as eye gaze, gestures, or even facial expressions—within diverse situational and environmental conditions. This raises a critical question: how can computers and machines be empowered to interpret such intention-expressive behaviors, especially in complex systems or complex tasks?

This study addresses this challenge by approaching intention recognition from a multi-level and human-machine-environment integrated perspective. We focus on identifying user intentions during interactions with complex systems, where intention is both hierarchical and contextually embedded.

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_preview/intention_1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1. A concept of hierarchical intention-driven intelligent human–computer interface.
</div>

<br>

## Our Work
Driven by the motivation above, we propose a hierarchical human intention recognition framework designed for complex task scenarios, as shown in Figure 2. The framework processes multidimensional input data from humans, machines, and environment to infer hierarchical human intentions relevant to human–computer interaction tasks. It comprises three core components:
1. **Task analysis** methods are employed to deconstruct complex human–computer interaction tasks.
2. **Multidimensional data** from humans, machines, and environment are collected in a simulated laboratory environment.
3. **A recognition pipeline** is developed that integrates a **1D-CNN+Bi-LSTM** neural network for low-level interaction intention recognition, along with a **dynamic Bayesian network (DBN)** for high-level task intention recognition.

The key contributions of this research are as follows:
- Propose a general hierarchical intention recognition framework for a wide range of complex tasks.
- Combine task analysis and machine learning, ensuring both interpretability and empirical robustness.
- Serve as a methodological foundation for building intelligent human-computer interaction system.

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_preview/intention_2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2. The research framework of hierarchical human intention recognition.
</div>

## Step 1: Complex Task Analysis
Considering the correlation between human intentions and task goals, we adopt a combined hierarchical goal analysis(HGA) and operational sequence diagrams(OSDs) approach for the overall task analysis of complex tasks, decomposing the task into a three-level structure of “task intentions-interaction intentions-feature data”. HGA uses perceptual control theory to decompose task goals, illustrating the hierarchical relationship between task intentions and interaction intentions. OSDs analyse the sequence of actions performed by humans during a task, reflecting the behavioural characteristics of the intention realization process.
<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_preview/intention_3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3. The systematic procedure of complex task analysis.
</div>


## Step 2: Feature Data Collection
Feature data collection forms the data foundation for hierarchical intention recognition in complex IHCI tasks. Its purpose is to replicate the task scenario in a laboratory environment on the basis of the aforementioned task analysis and to gather intention-related feature data from participants during task execution, thereby establishing a multilevel intention feature dataset to provide data samples for subsequent algorithm research. 

## Step 3: Hierarchical Intention Recognition Model
The hierarchical intention recognition model is the core of multilevel intention recognition in complex IHCI. Its purpose is to accurately recognize task and interaction intentions by integrating expert modelling and deep learning techniques on the basis of the feature dataset collected from standard simulation experiments and real-time captured human behaviour, machine, and environmental information. For low-level interaction intentions, considering the learning of temporal relationships, support for large-scale data processing, and computational efficiency, we employed a one-dimensional convolutional neural network (1DCNN) + Bi-LSTM deep learning neural network to recognize them. For high-level task intentions, we employed a dynamic Bayesian network to support the expert knowledge structure and interpretability, adopting a bottom-up approach to construct the intention recognition algorithm.
<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_preview/intention_4.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 4. The model structure of hierarchical intention recognition.
</div>


<br>

## Reference
{% include bib_search.liquid %}
<div class="publications">
  {% bibliography -f papers -q @*[key=ruishengzhang2025intention]* %}
</div>
