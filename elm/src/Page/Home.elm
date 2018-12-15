module Page.Home exposing (view)

import Html exposing (Html)


view : { title : String, content : Html msg }
view =
    { title = "Home Page of the Identiface"
    , content = Html.text "Welcome to Identiface Game....   content coming soon"
    }
