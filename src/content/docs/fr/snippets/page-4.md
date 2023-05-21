---
title: "Page 4"
description: "Lorem ipsum dolor sit amet - 4"
setup : import Button from '../../../components/snippets/Button.vue'
---

## All buttons

This page is an example on how to document your button components, most of the copy was written by AI so don't take it very seriously.

Find the code for this page in the `src/pages/components/buttons.md` file.

<div class="component-preview">
<div class="button-illustration">
    <div class="btn btn-yellow">
      <p class="btn-text text-black">button</p>
    </div>
  </div>

  <div class="button-illustration">
    <div class="btn btn-dark">
      <p class="btn-text text-white">button</p>
    </div>
  </div>

  <div class="button-illustration">
    <div class="btn btn-dark btn-animation">
        <p class="btn-text text-white text-animation">button</p>
      </div>
  </div>
</div>

```html
  <button class="test">Primary</button>
  <button class="test">Primary</button>
  <button class="test">Primary</button>
```
```css
    .test {
        background-color: red;
    }
```

## Primary button

We use the primary button for main actions like saving a form or creating a new item.

<div class="component-preview">
    <MainButton primary>Primary button</MainButton>
</div>

```js
<MainButton primary>Primary button</MainButton>
```

## Secondary button

Secondary buttons accompany primary buttons to provide additional actions.
For example, cancel buttons are secondary buttons.

<div class="component-preview">
    <MainButton secondary>Secondary button</MainButton>
</div>

```js
<MainButton secondary>Secondary button</MainButton>
```

## Text button

Text buttons are used for actions that do not require a primary or secondary button.

<div class="component-preview">
    <MainButton text>Text button</MainButton>
</div>

```js
<MainButton text>Text button</MainButton>
```