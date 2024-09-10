# mailbroad-editor

## Introduction

Email render and preview container.

## usage

```sh
$ npm install --save mailbroad-editor
```

or

```sh
$ yarn add mailbroad-editor
```

```js
import React from 'react';
import { BlockManager } from 'mailbroad-core';
import { EmailEditor, EmailEditorProvider } from 'mailbroad-editor';
import 'mailbroad-editor/lib/style.css';

const initialValues = {
  subject: 'Welcome to mailbroad',
  subTitle: 'Nice to meet you!',
  content: BlockManager.getBlockByType(BasicType.PAGE).create({}),
};

export function App() {
  return (
    <EmailEditorProvider
      data={initialValues}
      height={'calc(100vh - 72px)'}
    >
      {({ values }) => {
        return <EmailEditor />;
      }}
    </EmailEditorProvider>
  );
}
```
