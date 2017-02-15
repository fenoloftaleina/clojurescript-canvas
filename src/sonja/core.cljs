(ns sonja.core
  (:require [reagent.core :as r]))

(def w 400)
(def h 300)
(def wh (* w h 4))
(def wh-by-2 (int (/ wh 2)))

(defn by-id [id]
  (.getElementById js/document (name id)))

(defn map-px [y x]
  (+ (* 4 x) (* 4 w y)))

(defn get-px [data y x]
  (let [a (map-px y x)]
    (mapv
      #(aget data (+ a %))
      (range 3))))

(defn get-image-data [context]
  (.getImageData context 0 0 w h))

(defn put-image-data [context image-data]
  (.putImageData context image-data 0 0))

(def counter (r/atom 0))

(defn noise! [context image]
  ((fn []
     @counter
     (js/setTimeout
       (fn [] (swap! counter (partial + 1)))
       50)
     (.drawImage context image 0 0)
     (let [image-data (get-image-data context)
           pixels (.-data image-data)]
       (dorun (map #(aset ^ints pixels (+ % (rand-int 12)) (+ 50 (rand-int 50))) (range 0 wh 12)))
       (put-image-data context image-data))
       nil)))

(defn main-component []
  [:div
   [noise! (.getContext (by-id "here") "2d") (by-id "this")]])

(defn mount-root []
  (r/render [main-component] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(init!)
