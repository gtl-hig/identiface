module Main exposing (main)

import Browser exposing (Document)
import Browser.Navigation as Nav
import Html exposing (div, text)
import Json.Decode as Decode exposing (Value)
import Page exposing (Page)
import Page.Blank as Blank
import Page.Home as Home
import Page.NotFound as NotFound
import Route exposing (Route)
import Url exposing (Url)



-- ---------------------------------
-- MODEL


type Model
    = Redirect
    | NotFound
    | Home


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url navKey =
    ( Home, Cmd.none )
{-
     changeRouteTo (Route.fromUrl url) Home
          (Redirect (Session.fromViewer navKey maybeViewer))
-}


-- ---------------------------------
-- VIEW


view : Model -> Document Msg
view model =
    let
        viewPage page toMsg config =
            let
                { title, body } =
                    Page.view page config
            in
            { title = title
            , body = List.map (Html.map toMsg) body
            }
    in
    case model of
        Redirect ->
            viewPage Page.Other (\_ -> Ignored) Blank.view

        NotFound ->
            viewPage Page.Other (\_ -> Ignored) NotFound.view

        Home ->
            viewPage Page.Other (\_ -> Ignored) Home.view



-- ---------------------------------
-- UPDATE


type Msg
    = Ignored
    | ChangedRoute (Maybe Route)
    | ChangedUrl Url
    | ClickedLink Browser.UrlRequest


changeRouteTo : Maybe Route -> Model -> ( Model, Cmd Msg )
changeRouteTo maybeRoute model =
    case maybeRoute of
        Nothing ->
            ( NotFound, Cmd.none )

        Just Route.Root ->
            ( model, Cmd.none )

        Just Route.Home ->
            ( model, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( Ignored, _ ) ->
            ( model, Cmd.none )

        ( ClickedLink urlRequest, _ ) ->
            case urlRequest of
                Browser.Internal url ->
                    case url.fragment of
                        Nothing ->
                            ( model, Cmd.none )

                        Just _ ->
                            ( model, Cmd.none )

                Browser.External href ->
                    ( model
                    , Nav.load href
                    )

        ( ChangedUrl url, _ ) ->
            changeRouteTo (Route.fromUrl url) model

        ( ChangedRoute route, _ ) ->
            changeRouteTo route model


updateWith : (subModel -> Model) -> (subMsg -> Msg) -> Model -> ( subModel, Cmd subMsg ) -> ( Model, Cmd Msg )
updateWith toModel toMsg model ( subModel, subCmd ) =
    ( toModel subModel
    , Cmd.map toMsg subCmd
    )



-- ---------------------------------
-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    case model of
        NotFound ->
            Sub.none

        Redirect ->
            Sub.none

        _ ->
            Sub.none



-- ---------------------------------
-- MAIN


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , onUrlChange = ChangedUrl
        , onUrlRequest = ClickedLink
        , subscriptions = subscriptions
        , update = update
        , view = view
        }
