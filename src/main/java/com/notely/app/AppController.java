package com.notely.app;

import com.notely.app.models.GhostPlaySheet;
import com.notely.app.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.net.URL;
import java.util.Optional;

@Controller
public class AppController {

    @Autowired
    private CustomUserDetailsService userService;

    @Autowired
    private GhostPlaySheetsDetailsService ghostPlayService;

    @GetMapping("")
    public String viewHomePage() {
        return "index";
    }

    @GetMapping("/user/play")
    public String viewPianoPage(@RequestParam(name = "id", required = false) Long sheetId, Model model) {
        if (sheetId != null) {
            model.addAttribute("sheetText", ghostPlayService.getTextContentById(sheetId));
        }

        return "home";
    }

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());

        return "registry/signup_form";
    }

    @PostMapping("/process_register")
    public String processRegister(User user) {
        userService.encryptAndSaveUser(user);

        return "registry/register_success";
    }

    @GetMapping("/user/users")
    public String listUsers(
            @RequestParam(value = "search", required = false) String search,
            Model model) {

        if (search != null) {
            model.addAttribute("listUsers", userService.searchByName(search));
        } else {
            model.addAttribute("listUsers", userService.getAllUsers());
        }

        return "user/users";
    }

    @GetMapping("/user/{id}")
    public String userDetail(
            @PathVariable("id") long id,
            Model model,
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        Optional<User> possibleUser = userService.getUserById(id);

        User user;

        if (possibleUser.isPresent()) {
            user = possibleUser.get();
            model.addAttribute("viewedUser", user);

            model.addAttribute("listSheets", ghostPlayService.getSheetsByAuthorId(id, userDetails.getId()));

            if (user.getId() == userDetails.getId()) {
                return "user/detail_with_delete";
            }

            return "user/detail";
        }

        return "user/user_not_exist";
    }

    @GetMapping("/user/delete_account")
    public String deleteUser(Model model) {
        return "registry/delete";
    }

    @PostMapping("/user/delete_success")
    public String processDelete(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            Model model,
            HttpServletRequest request) {
        userService.deleteByEmail(userDetails.getUsername());

        // Log out user on delete
        HttpSession session = request.getSession();
        session.invalidate();
        SecurityContextHolder.clearContext();

        return "registry/delete_success";
    }

    @GetMapping("user/ghostplay")
    public String listSheets(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestParam(value = "search", required = false) String search,
            Model model) {

        if (search != null) {
            model.addAttribute("listSheets", ghostPlayService.getAllFilteredSheetsSearch(userDetails.getId(), search));
        } else {
            model.addAttribute("listSheets", ghostPlayService.getAllFilteredSheets(userDetails.getId()));
        }

        return "ghostplay/list";
    }

    @GetMapping("user/ghostplay/create")
    public String createSheet(@RequestParam(name = "text", required = false) String textCont, Model model) {
        GhostPlaySheet sheet = new GhostPlaySheet();
        if (textCont != null) {
            try {
                sheet.setTextContent(new URL(textCont).toString());
            } catch (IOException e) {
                System.out.println(e.getMessage());
                sheet.setTextContent(e.getMessage().replace("no protocol: ", ""));
            }
        } else {
            sheet.setTextContent("");
        }

        model.addAttribute("sheet", sheet);

        return "ghostplay/create";
    }

    @PostMapping("user/ghostplay/create_success")
    public String processSheet(
            GhostPlaySheet ghostPlaySheet,
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        ghostPlayService.saveSheet(ghostPlaySheet, userDetails.getId());

        return "ghostplay/create_success";
    }

    @GetMapping("user/ghostplay/{id}")
    public String sheetDetail(
            @PathVariable("id") long id,
            Model model,
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        Optional<GhostPlaySheet> possibleSheet = ghostPlayService.getSheetById(id);

        GhostPlaySheet sheet;

        if (possibleSheet.isPresent()) {
            sheet = possibleSheet.get();
            model.addAttribute("sheet", sheet);

            Optional<User> possibleAuthor = userService.getUserById(sheet.getAuthorId());

            if (possibleAuthor.isPresent()) {
                User author = possibleAuthor.get();

                model.addAttribute("author", author);
                model.addAttribute("authorName", userService.getFullName(author));

                if (sheet.getAuthorId() == userDetails.getId()) {
                    return "ghostplay/detail_with_edit";
                }

                return "ghostplay/detail";
            }
        }

        return "ghostplay/sheet_not_exist";
    }

    @GetMapping("user/ghostplay/{id}/edit")
    public String sheetEdit(
            @PathVariable("id") long id,
            Model model,
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        Optional<GhostPlaySheet> possibleSheet = ghostPlayService.getSheetById(id);

        if (possibleSheet.isPresent()) {
            GhostPlaySheet sheet = possibleSheet.get();
            model.addAttribute("sheet", sheet);

            if (sheet.getAuthorId() == userDetails.getId()) {
                return "ghostplay/edit";
            }

            return "ghostplay/cannot_edit_sheet";
        }

        return "ghostplay/sheet_not_exist";
    }

    @PostMapping("user/ghostplay/{id}/edit_success")
    public String sheetEdit(@PathVariable("id") long id, GhostPlaySheet sheet) {
        ghostPlayService.updateSheet(id, sheet);

        return "ghostplay/edit_success";
    }

    @GetMapping("user/ghostplay/{id}/delete")
    public String sheetDelete(
            @PathVariable("id") long id,
            Model model,
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        Optional<GhostPlaySheet> possibleSheet = ghostPlayService.getSheetById(id);

        if (possibleSheet.isPresent()) {
            GhostPlaySheet sheet = possibleSheet.get();
            model.addAttribute("sheet", sheet);

            if (sheet.getAuthorId() == userDetails.getId()) {
                return "ghostplay/delete";
            }

            return "ghostplay/cannot_delete_sheet";
        }

        return "ghostplay/sheet_not_exist";
    }

    @PostMapping("user/ghostplay/{id}/delete_success")
    public String sheetDeleteSuccess(@PathVariable("id") long id, GhostPlaySheet sheet) {
        ghostPlayService.deleteSheet(sheet);

        return "ghostplay/delete_success";
    }
}
