import $ from "jquery";

import render_login_to_access_modal from "../templates/login_to_access.hbs";

import * as hash_util from "./hash_util";
import {page_params} from "./page_params";

export function show() {
    // Hide all overlays, popover and go back to the previous hash if the
    // hash has changed.
    let login_link;
    if (page_params.development_environment) {
        login_link = "/devlogin/?" + hash_util.current_hash_as_next();
    } else {
        login_link = "/login/?" + hash_util.current_hash_as_next();
    }

    $("#login-to-access-modal-holder").html(
        render_login_to_access_modal({
            signup_link: "/register",
            login_link,
        }),
    );
    $("#login_to_access_modal").modal("show");
}
