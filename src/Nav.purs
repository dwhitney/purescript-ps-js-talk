module Nav where

import Prelude

import Effect (Effect)

nav :: forall props. props -> ReactElement -> ReactElement
nav props children = createElement "nav" props children

h1 :: forall props. props -> ReactElement -> ReactElement
h1 props children = createElement "h1" props children

button :: forall props. props -> ReactElement -> ReactElement
button props children = createElement "button" props children

navigation :: { addChart :: Effect Unit } -> ReactElement
navigation props = 
  nav _null (array [ chartOMatic, addCharButton])
  where
    chartOMatic = h1 _null (text "Chart-o-Matic")
    addCharButton = button { onClick : props.addChart } _null

text :: String -> ReactElement
text str = unsafeCoerce str

array :: Array ReactElement -> ReactElement
array children = unsafeCoerce children

foreign import data ReactElement :: Type

foreign import createElement :: forall props. String -> props -> ReactElement -> ReactElement

foreign import _null :: ReactElement 

foreign import unsafeCoerce :: forall a b. a -> b