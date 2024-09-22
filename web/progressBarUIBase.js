export var EStatus;
(function (EStatus) {
    EStatus["executing"] = "Executing";
    EStatus["executed"] = "Executed";
    EStatus["execution_error"] = "Execution error";
})(EStatus || (EStatus = {}));
export var NewMenuOptions;
(function (NewMenuOptions) {
    NewMenuOptions["Disabled"] = "Disabled";
    NewMenuOptions["Top"] = "Top";
    NewMenuOptions["Bottom"] = "Bottom";
})(NewMenuOptions || (NewMenuOptions = {}));
export class ProgressBarUIBase {
    constructor(parentId, rootId, showSection) {
        Object.defineProperty(this, "parentId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: parentId
        });
        Object.defineProperty(this, "rootId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: rootId
        });
        Object.defineProperty(this, "showSection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: showSection
        });
        Object.defineProperty(this, "htmlContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "htmlClassMonitor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'crystools-monitor-container'
        });
        Object.defineProperty(this, "createRoot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                let ctoolsRoot = document.getElementById(this.rootId);
                if (!ctoolsRoot) {
                    ctoolsRoot = document.createElement('div');
                    ctoolsRoot.setAttribute('id', this.rootId);
                    const parentElement = document.getElementById(this.parentId);
                    parentElement?.insertAdjacentElement('afterend', ctoolsRoot);
                }
                this.htmlContainer = document.createElement('div');
                this.htmlContainer.classList.add(this.htmlClassMonitor);
                ctoolsRoot.append(this.htmlContainer);
            }
        });
        this.createRoot();
        this.showFullSection(this.showSection);
    }
    showFullSection(value) {
        this.showSection = value;
        this.htmlContainer.style.display = value ? 'flex' : 'none';
    }
}
