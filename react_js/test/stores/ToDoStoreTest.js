'use strict';

import alt from 'components/Dispatcher';
import { ToDoStore } from 'stores//ToDoStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('ToDoStore', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, ToDoStore);
  });
});
